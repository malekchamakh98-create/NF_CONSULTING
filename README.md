# NF Consulting — site vitrine

React + TypeScript + Vite + React Router. CSS simple dans `src/index.css` (aucune dépendance de style).

## Installation
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # génère dist/
npm run preview   # teste le build
```
Prérequis : Node.js 20+.

## Structure
- `src/components/` : une section par dossier (Header, Hero, About, Services, WhyUs, Approach, Stats, Financing, Projects, Testimonials, Contact, Newsletter, Footer)
- `src/pages/` : Home, Legal (mentions légales), Privacy (confidentialité)
- `src/data/` : services, stats, testimonials, projects
- `src/config/company.ts` : coordonnées officielles
- `public/` : robots.txt, sitemap.xml

## Modifier les contenus
- Services : `src/data/services.ts`
- Chiffres clés : `src/data/stats.ts` (remplacer `XX` par un nombre, il s'anime automatiquement)
- Témoignages : `src/data/testimonials.ts` (section masquée tant que la liste est vide)
- Accompagnements : `src/data/projects.ts`
- Email et horaires : `src/config/company.ts` (champs vides = « TODO — À CONFIRMER »)

## Modifier les couleurs
Variables CSS en haut de `src/index.css` (`--navy`, `--slate`, `--gold`, `--bg`, `--bg2`, `--ink`, `--mute`).

## À faire avant mise en ligne
- Remplacer `TODO-DOMAINE` dans `index.html`, `public/robots.txt`, `public/sitemap.xml`
- Rédiger les pages mentions légales et confidentialité
- Brancher le champ newsletter à un service d'envoi (ou le retirer)
- Ajouter une image Open Graph et valider le logo

## Déploiement
Netlify / Vercel : commande `npm run build`, dossier `dist`. Ajouter une règle de réécriture de toutes les routes vers `/index.html`.
