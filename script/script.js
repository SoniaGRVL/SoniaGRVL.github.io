"use strict";

/**
 * Tiny helpers
 */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const mqReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mqPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * Theme
 */
function applyTheme(isDark) {
  document.body.classList.toggle("darkMode", isDark);
  document.body.classList.toggle("lightMode", !isDark);
}

function setupThemeToggle() {
  const toggle = $("#color_mode");
  if (!toggle) return;

  const saved = localStorage.getItem("theme"); // "dark" | "light" | null
  const initialDark =
    saved === "dark" ? true : saved === "light" ? false : mqPrefersDark.matches;

  toggle.checked = initialDark;
  applyTheme(initialDark);

  toggle.addEventListener("change", () => {
    const isDark = toggle.checked;
    applyTheme(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Si pas de préférence sauvegardée, suit le système
  mqPrefersDark.addEventListener("change", (e) => {
    if (localStorage.getItem("theme") !== null) return;
    toggle.checked = e.matches;
    applyTheme(e.matches);
  });
}

/**
 * Mobile menu blur + close helpers
 */
function setupMenuBlurAndClose() {
  const check = $("#checkMenu");
  const home = $(".homePage");
  const main = $(".mainPage");
  if (!check || !home || !main) {
    return { close() {}, isOpen: () => false };
  }

  const setBlur = (on) => {
    const v = on ? "blur(10px)" : "none";
    home.style.setProperty("--blur", v);
    main.style.setProperty("--blur", v);
  };

  const close = () => {
    check.checked = false;
    setBlur(false);
  };

  const isOpen = () => check.checked;

  // initial + updates
  setBlur(check.checked);
  check.addEventListener("change", () => setBlur(check.checked));

  // Close menu when clicking any internal anchor
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => close());
  });

  // Accessibility: close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) close();
  });

  // Optional: close when clicking outside nav (simple heuristic)
  const nav = $("nav");
  const toggleButton = $(".toggleMenu");
  document.addEventListener("click", (e) => {
    if (!isOpen()) return;
    const t = e.target;
    if (nav?.contains(t) || toggleButton?.contains(t) || check.contains(t)) return;
    close();
  });

  return { close, isOpen };
}

/**
 * Reveal on scroll (IntersectionObserver)
 * Assumes CSS uses: .reveal { ... } and .reveal.reveal-visible { ... }
 */
function setupRevealObserver() {
  const items = $$(".reveal");
  if (!items.length) return;

  // Reduced motion: show everything
  if (mqReduceMotion.matches) {
    items.forEach((el) => el.classList.add("reveal-visible"));
    return;
  }

  const threshold = 0.12;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("reveal-visible", entry.intersectionRatio >= threshold);
      });
    },
    { threshold }
  );

  items.forEach((el) => observer.observe(el));
}

/**
 * Init
 */
function init() {
  setupThemeToggle();
  setupMenuBlurAndClose();
  setupRevealObserver();
}

document.addEventListener("DOMContentLoaded", init);
