import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com'
  
  // Pages principales (priorité maximale)
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Outils principaux les plus populaires (haute priorité)
  const topTools = [
    'timer',
    'compresseur-image',
    'generateur-uuid',
    'json-formatter',
    'minificateur-css-js',
    'editeur-markdown',
    'calculatrice-avancee',
    'calculatrice-fiscale',
    'generateur-iban',
    'generateur-qr-code',
    'generateur-mot-de-passe',
    'compteur-mots',
  ].map(tool => ({
    url: `${baseUrl}/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Tous les autres outils (priorité normale-élevée)
  const otherTools = [
    'calculateur-credit',
    'calculateur-credit-immobilier',
    'calculateur-duree-video',
    'calculateur-formules',
    'calculateur-interets-composes',
    'calculateur-pourboire',
    'calculateur-roi',
    'comparateur-texte',
    'convertisseur-couleur',
    'convertisseur-devises',
    'convertisseur-fuseau-horaire',
    'convertisseur-morse',
    'convertisseur-unites',
    'csv-to-json',
    'decodeur-jwt',
    'destination-voyage-aleatoire',
    'encodeur-base64',
    'encodeur-url',
    'generateur-banniere-linkedin',
    'generateur-code-barres',
    'generateur-excuses',
    'generateur-gradient-css',
    'generateur-hash',
    'generateur-lorem-ipsum',
    'generateur-meta-seo',
    'generateur-nom-aleatoire',
    'generateur-nom-entreprise',
    'generateur-nom-personnage',
    'generateur-nombre-aleatoire',
    'generateur-palette-couleurs',
    'generateur-robots-txt',
    'generateur-shadow-css',
    'generateur-slug',
    'lanceur-des',
    'minificateur-html',
    'pile-ou-face',
    'planificateur-budget',
    'redimensionneur-image',
    'repeteur-texte',
    'simulateur-scpi',
    'table-multiplication',
    'testeur-regex',
    'text-to-speech',
    'tracker-crypto',
  ].map(tool => ({
    url: `${baseUrl}/${tool}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Pages informatives (priorité moyenne-haute)
  const infoPages = [
    { url: `${baseUrl}/guide`, priority: 0.8 },
    { url: `${baseUrl}/faq`, priority: 0.7 },
    { url: `${baseUrl}/a-propos`, priority: 0.6 },
    { url: `${baseUrl}/contact`, priority: 0.6 },
  ].map(page => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }))

  // Pages légales (priorité basse)
  const legalPages = [
    { url: `${baseUrl}/politique-confidentialite`, priority: 0.4 },
    { url: `${baseUrl}/conditions-utilisation`, priority: 0.4 },
  ].map(page => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
  }))

  return [
    ...mainPages,
    ...topTools,
    ...otherTools,
    ...infoPages,
    ...legalPages,
  ]
}
