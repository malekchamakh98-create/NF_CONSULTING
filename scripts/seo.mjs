// Génère sitemap.xml et complète robots.txt après le build, à partir de l'URL publique du site.
// URL lue dans SITE_URL, ou dans les variables fournies par Vercel / Netlify.
import { writeFileSync, appendFileSync, existsSync } from 'node:fs'

const raw = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.URL || ''
if (!raw) { console.log('seo: aucune URL publique détectée, sitemap ignoré (définir SITE_URL).'); process.exit(0) }
const base = (raw.startsWith('http') ? raw : `https://${raw}`).replace(/\/$/, '')
const paths = ['/', '/expertises/finance', '/expertises/administratif', '/expertises/recouvrement', '/expertises/ressources-humaines', '/expertises/comptabilite-france-belgique', '/mentions-legales', '/confidentialite']
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')}\n</urlset>\n`
writeFileSync('dist/sitemap.xml', xml)
if (existsSync('dist/robots.txt')) appendFileSync('dist/robots.txt', `Sitemap: ${base}/sitemap.xml\n`)
console.log(`seo: sitemap généré pour ${base}`)
