# Portafolio — Patricio Carpio

Portfolio personal bilingüe (ES/EN) con tema claro/oscuro y páginas individuales de proyectos.

**Stack:** React 19 · Vite 7 · TypeScript 5.9 · CSS a mano · react-router-dom v7

**Deploy:** GitHub Pages → `https://pa7r1.github.io/PORFOLIO/`

## Comandos

```bash
pnpm dev      # servidor de desarrollo
pnpm build    # typecheck + bundle de producción
pnpm lint     # ESLint
pnpm preview  # previsualizar build de producción
```

## Estructura relevante

```
src/
  i18n/           # LocaleContext, diccionarios ES/EN, pick helper
  pages/          # ProjectDetail, NotFound
  components/
    common/       # ThemeContext, ThemeToggle, LangSwitch
    sections/     # About, Timeline, Projects, Skills, Contact
  data/           # projects.ts, personalInfo.ts, experiences.ts, skills.ts
  utils/          # asset.ts, useDocumentMeta.ts
public/
  404.html        # redirect SPA para GitHub Pages
  robots.txt
  sitemap.xml
```

## Routing

BrowserRouter con `basename="/PORFOLIO/"`. Las subrutas en GitHub Pages usan el patrón [spa-github-pages](https://github.com/rafgraph/spa-github-pages): `public/404.html` codifica la ruta como query param y el script en `index.html` la recupera con `history.replaceState`.
