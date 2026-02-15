/**
 * Site configuration
 * Central location for site-wide constants
 */

export const SITE_CONFIG = {
  // Base URL - should match NEXT_PUBLIC_BASE_URL in production
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://work-timer.com',
  
  // Site name
  name: 'Veldra Tools & Insights',
  tagline: 'Outils puissants. Analyses expertes.',
  
  // Author information (for E-E-A-T)
  author: {
    name: 'Alex Veldra',
    bio: 'Développeur fullstack & investisseur immo/crypto - 8+ ans d\'expérience',
    expertise: 'Finance, Immobilier, Développement Web',
  },
} as const;
