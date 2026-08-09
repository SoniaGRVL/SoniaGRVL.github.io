document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Nav : fond au scroll + cache/montre ---------- */
  const nav = document.querySelector(".site-nav");
  let lastScrollY = window.scrollY;
  let ticking = false;

  const handleNavScroll = () => {
    const currentScrollY = window.scrollY;

    if (nav) {
      // Fond plus opaque après 20px
      nav.classList.toggle("scrolled", currentScrollY > 20);

      // Cache au scroll down / montre au scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // On descend et on a dépassé le hero → on cache
        nav.classList.add("nav--hidden");
      } else {
        // On remonte (ou tout en haut) → on montre
        nav.classList.remove("nav--hidden");
      }
    }

    lastScrollY = currentScrollY;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(handleNavScroll);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  handleNavScroll();

  /* ---------- Menu mobile (burger) ---------- */
  const burger = document.getElementById("menu-toggle");
  const navLinksEl = document.getElementById("nav-links");

  if (burger && navLinksEl) {
    burger.addEventListener("click", () => {
      const isOpen = navLinksEl.classList.toggle("open");
      burger.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    // Ferme le menu au clic sur un lien
    navLinksEl.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinksEl.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Reveals au scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  /* ---------- Scroll spy (section active dans la nav) ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (sections.length && navLinks.length) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const isActive = link.getAttribute("href") === `#${id}`;
              link.classList.toggle("active", isActive);
              if (isActive) {
                link.setAttribute("aria-current", "true");
              } else {
                link.removeAttribute("aria-current");
              }
            });
          }
        });
      },
      {
        // La section est "active" quand elle occupe le centre de l'écran
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );
    sections.forEach((section) => spyObserver.observe(section));
  }
});
