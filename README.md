# Portfolio — Sonia Grivel

Portfolio personnel de **Sonia Grivel**, développeuse web full stack
spécialisée .NET / C# et SQL Server, ouverte à d'autres langages, basée à Caen (ou full remote).

Site statique, sans framework — HTML sémantique, CSS moderne et
JavaScript vanilla.

🔗 **[Voir le site en ligne](https://ton-url-ici)**

---

## Stack

| Domaine       | Technos                                      |
| ------------- | -------------------------------------------- |
| Structure     | HTML5 sémantique                             |
| Styles        | CSS3 — custom properties, Grid, Flexbox      |
| Interactivité | JavaScript vanilla (IntersectionObserver)    |
| Typographie   | Sora (titres) · Manrope (corps de texte)     |
| Icônes        | [Lucide](https://lucide.dev) — SVG inline    |
| Build         | Vite                                         |
| Qualité       | ESLint 9 · Prettier 3 · Stylelint 16 · Husky |

---

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/<ton-user>/sonia-portfolio.git
cd sonia-portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Vérification complète (lint + format)
npm run check
```

---

## Structure du projet

```
SoniaGRVL.github.io/
├── .husky/                # Git hooks (pre-commit)
├── assets/
│   ├── css/
│   │   └── style.css      # Design tokens + composants
│   └── js/
│       └── main.js        # Menu mobile · Reveal · Scrollspy
├── public/
│   └── cv/                # CV PDF téléchargeable
├── dist/                  # Build de production (généré)
├── .eslintrc / eslint.config.js
├── .prettierrc
├── .stylelintrc.json
├── index.html             # Page unique
├── package.json
├── vite.config.js
└── README.md
```

---

## Fonctionnalités

- **Animations au scroll** — `IntersectionObserver`, dégressives via
  `prefers-reduced-motion`
- **Navigation sticky** — barre fixe avec effet de fond au scroll
- **Scrollspy** — mise en évidence de la section active + `aria-current`
- **Menu mobile** — burger accessible (`aria-expanded`), fermeture au clic
- **Responsive** — grilles adaptatives, breakpoints à 900px / 768px / 600px
- **SEO** — meta description, OpenGraph, Twitter Cards
- **Accessibilité** — HTML sémantique, `aria-label`, `:focus-visible`,
  `lang="fr"`, icônes décoratives en `aria-hidden`

---

## Design

Thème sombre unique, construit sur des design tokens CSS (`:root`) :

| Token           | Valeur    | Usage                     |
| --------------- | --------- | ------------------------- |
| `--bg`          | `#0b0e13` | Fond principal            |
| `--surface`     | `#131720` | Sections alternées        |
| `--surface-2`   | `#1a2030` | Cartes                    |
| `--accent`      | `#6d28d9` | Violet — couleur clé      |
| `--accent-2`    | `#8b5cf6` | Violet clair — hover      |
| `--accent-warm` | `#f59e0b` | Ambre — accent secondaire |

Modifier ces variables dans `assets/css/style.css` suffit à changer
l'identité visuelle du site.

---

## Personnalisation

### Projets

Chaque projet suit un format **case study** : Problème → Approche →
Résultat. Pour en ajouter un, dupliquer un bloc `<article class="project-card">`
dans la section `#projets` de `index.html`.

### CV

Remplacer le PDF dans `public/cv/` et ajuster le `href` du bouton
« Télécharger mon CV » dans `index.html`.

---

## Déploiement

Site 100 % statique — déployable sur GitHub Pages, Netlify, Vercel ou
tout hébergeur de fichiers statiques.

```bash
npm run build   # génère /dist
```

---

_© 2026 Sonia Grivel — Développeuse Full Stack_
