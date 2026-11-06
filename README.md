# NF Consulting — site vitrine

React + TypeScript + Vite + React Router. Contenu issu de la présentation « N F Facility Management & Consulting ».

## Installation
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # génère dist/ (+ sitemap si SITE_URL est défini)
npm run preview
```
Node.js 20+.

## Structure
- `src/components/` : Header, Hero, About, Services, WhyUs, Approach, Values, Financing, Contact, Footer
- `src/pages/` : Home, Service (une page par expertise), Legal, Privacy
- `src/data/services.ts` : textes et photos des 5 expertises
- `src/config/company.ts` : nom, téléphone, adresse
- `src/assets/` : photos issues de la présentation

## Modifier
- Textes des expertises : `src/data/services.ts`
- Téléphone / adresse : `src/config/company.ts`
- Couleurs : variables CSS en haut de `src/index.css`

## Déploiement (Vercel)
Import du dépôt GitHub, réglages par défaut (`npm run build`, dossier `dist`). `vercel.json` gère les routes. Le sitemap est généré automatiquement avec l'URL du projet.
