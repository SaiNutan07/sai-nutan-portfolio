# Sai Nutan — Portfolio

A recruiter-focused personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. All content is sourced from `src/data/resume.ts` — update that one file to change anything on the site.

## Tech stack

- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- Framer Motion (animation)
- lucide-react (icons)

## Project structure

```
src/
  data/
    resume.ts          # single source of truth for all content
  components/
    Navbar.tsx
    Hero.tsx
    SchemaDiagram.tsx   # animated Java/Spring Boot/... and RAG/.../LLM diagram
    About.tsx
    Skills.tsx
    Projects.tsx
    ProjectCard.tsx
    Experience.tsx       # wraps leadership, achievements, education
    LeadershipBlock.tsx
    AchievementsBlock.tsx
    EducationBlock.tsx
    WhatIBring.tsx
    Certifications.tsx
    Contact.tsx
    Footer.tsx
    Reveal.tsx           # shared scroll-reveal wrapper
    SectionHeading.tsx
    icons.tsx             # GitHub / LinkedIn glyphs
  hooks/
    useActiveSection.ts   # nav scroll-spy
  App.tsx
  main.tsx
  index.css               # Tailwind import + design tokens
```

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The static site is output to `dist/`.

## Updating content

Everything — name, stats, skills, projects, certifications, education, contact links — lives in `src/data/resume.ts` as plain TypeScript objects. Edit values there; the UI will reflect them automatically. No content is hardcoded inside components.

## Deployment

The `dist/` folder produced by `npm run build` is a static site and can be deployed to any static host:

- **Vercel**: `npm i -g vercel` then `vercel` in the project root (auto-detects Vite).
- **Netlify**: drag-and-drop the `dist/` folder in the Netlify dashboard, or connect the repo with build command `npm run build` and publish directory `dist`.
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package.

## Notes

- Dark mode is the only theme (by design, per the brief) — no light/dark toggle.
- Reduced-motion preferences are respected throughout (`prefers-reduced-motion`).
- One project bullet from the original resume draft ("Integrated sensors for obstacle detection, navigation...") appeared under the Payment Orchestration project but describes a different kind of system (robotics/IoT, not payments). It was left out of the site copy as a likely copy-paste artifact — worth double-checking against your original project notes and adding back correctly if it belongs elsewhere on the resume.
