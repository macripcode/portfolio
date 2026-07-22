# CLAUDE.md

This file provides context to Claude Code when working on this repository.

## Project Overview

This is Cristina Portilla's personal portfolio website: a single-page React app presenting her hero intro, work experience timeline, project showcase, and a contact form. The site is bilingual (English/Spanish, toggleable at runtime) and supports dark/light themes.

## Tech Stack

- **Vite 6** — build tool and dev server
- **React 19** — JavaScript + JSX (no TypeScript)
- **Tailwind CSS v4** (via `@tailwindcss/postcss`) — layered on top of hand-written per-section CSS files
- **framer-motion** — scroll-reveal animations
- **@emailjs/browser** — sends the contact form directly from the client (no backend)
- **@mui/material** / **@mui/icons-material** — used for standalone icons, not full MUI components
- Path alias: `@` → `src/` (configured in `vite.config.js`)

## Commands

```bash
npm run dev      # start the Vite dev server
npm run build    # production build to dist/
npm run lint     # ESLint (flat config, JS/JSX, react-hooks + react-refresh rules)
npm run preview  # preview the production build
```

There is no test script/runner configured in this project.

## Project Structure

```
src/
├── main.jsx                # ReactDOM root; provider nesting order: Language → Theme → Translation → App
├── App.jsx                 # top-level layout: Header, Hero, Experience, Work, Contact
├── components/
│   ├── Header/              # Header.jsx, Logo.jsx (flip effect), Navbar.jsx, Settings.jsx (theme/lang toggle)
│   ├── Hero/                # Hero.jsx
│   ├── Experience/          # Experience.jsx, Project.jsx (career timeline)
│   ├── Work/                # Work.jsx, Slider.jsx, ProjectCard.jsx (project showcase)
│   ├── Contact/              # Contact.jsx (EmailJS form)
│   ├── Languages/            # language proficiency display
│   └── DevIconElement/       # renders devicon tech-stack icons
├── context/                 # LanguageContext, ThemeContext, TranslationContext
├── data/
│   ├── translations.jsx      # all site copy, keyed by en/es
│   └── techIcons.js          # tech-name → devicon class map
├── hooks/
│   └── useCSSVariables.jsx   # reads live CSS custom properties, reacts to theme class changes
└── styles/                   # per-section CSS: header/, hero/, experience/, work/, contact/, languages/, deviconelement/, plus global.css & variables.css
```

## Architecture Notes

**i18n**: Hand-rolled, not a library. `LanguageContext` holds the current `lang` (`en`/`es`); `TranslationContext` looks up the matching object in `src/data/translations.jsx` and exposes it via a `useTranslation()` hook. Components consume copy by destructuring nested keys, e.g. `translation.hero`, `translation.contact`.

**Theming**: Also hand-rolled. `ThemeContext` toggles `document.body.className` between `light`/`dark`, persisted to `localStorage`. Colors are defined as CSS custom properties scoped to `body.light`/`body.dark` in `src/styles/variables.css` (`--background`, `--main-text`, `--accent-one`, `--glow`, etc.). `useCSSVariables` reads these live via a `MutationObserver` on `body`'s class attribute, for cases where JS needs the resolved color value (e.g. inline styles in `Project.jsx`).

**Animation pattern**: Scroll-reveal is done with a repeated `framer-motion` variants object (opacity + x-offset based on a `custom="left"|"right"` prop, triggered via `whileInView`/`viewport={{ once: true, amount: 0.3 }}`). Used in `Hero.jsx`, `Experience.jsx`, `Slider.jsx`.

**Content**: All copy lives in `src/data/translations.jsx` rather than inline in components — update content there, not in JSX.

## Key Components

- **Header/Logo** (`src/components/Header/Logo.jsx`, styles in `src/styles/header/logo.css`) — 3D flip-card animation. On mobile, tapping flips between the logo and a menu/close icon; on desktop, hover triggers a gradient/glow flip between `logo-pattern.png` and `logo-pattern2.png`.
- **Hero** (`src/components/Hero/Hero.jsx`) — two-column layout: intro text + CTA buttons (`#work`, `#contact`) alongside an embedded YouTube video.
- **Experience** (`src/components/Experience/Experience.jsx`, `Project.jsx`) — vertical career timeline with expandable achievement lists and tech-stack icons via `DevIconElement`.
- **Work** (`src/components/Work/Work.jsx`, `Slider.jsx`, `ProjectCard.jsx`) — custom-built project slider (active card + clickable thumbnails) with framer-motion crossfade transitions.
- **Contact** (`src/components/Contact/Contact.jsx`) — form (fullName/email/subject/message) submitted via `emailjs.sendForm`. Requires `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY` in a local `.env` file.

## Conventions

- One folder per component under `src/components/<PascalCaseName>/`.
- Styles live in a parallel tree under `src/styles/<section>/<name>.css`, imported directly into the matching component — not co-located with the component file.
- Section components follow the pattern `<section id="...">` wrapping `<div className="container-section">`, giving consistent scroll-anchor navigation and spacing.
- Reusable design-system utility classes (defined in `global.css`/`variables.css`) include `border`, `border-radius`, `glow`, `glow-static`, `glow-text`, `glass-effect`, `gradient`, `common-text`, `title`, `container-section`.
- Conditional class names are built manually (`[...].filter(Boolean).join(' ')`) rather than via a helper library.
