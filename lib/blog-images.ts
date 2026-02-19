/**
 * Centralized configuration for blog article images
 * All images are loaded from external URLs instead of local assets
 */

export const blogImages = {
  // Automobile category - Electric vehicles and batteries
  'batterie-ev-vie-utile': 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&h=600&fit=crop', // EV battery closeup
  'bornes-recharge-france-2026': 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=1200&h=600&fit=crop', // EV charging station
  'full-elec-comparatif-2026': 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=600&fit=crop', // Modern electric cars
  'futur-automobile-2030': 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop', // Futuristic car technology
  'leasing-ev-vs-essence': 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=600&fit=crop', // Car keys and contract
  'peugeot-citroen-3-motorisations': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&h=600&fit=crop', // Peugeot car front view
  'prix-voitures-electriques-2026': 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&h=600&fit=crop', // Electric car charging
  'puretech-problemes-garantie': 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=600&fit=crop', // Car engine maintenance
  
  // Finance & Investment - Stock market and financial planning
  'etf-2026': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop', // Stock market charts
  'fiscalite-2026': 'https://images.unsplash.com/photo-1554224311-beee460201e8?w=1200&h=600&fit=crop', // Calculator and documents
  'pea-2026': 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&h=600&fit=crop', // Investment growth concept
  
  // Real Estate - Property investment
  'immo-grand-est': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop', // Modern house architecture
  
  // Development - Coding and tools
  'outils-dev-2026': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop', // Code on screen
  'veldra-outils-dev-2026': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop', // Code on screen - developer tools

  // Gaming - Consoles and streaming setups
  'gaming-comparatifs-2026': 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=600&fit=crop', // Gaming controller

  // Finance - Assurance vie
  'assurance-vie-2026-comparatif': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop', // Insurance / financial planning
  
  // Finance - ETF and investment strategies (veldra articles)
  'veldra-etf-recommandations': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop', // Stock market charts - ETF allocations
  'veldra-pea-2026': 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=1200&h=600&fit=crop', // Investment growth concept - PEA simulator
  
  // Real Estate - Property investment and taxation (veldra articles)
  'veldra-immo-grand-est': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop', // Modern house architecture - Grand Est property
  'veldra-fiscalite-2026': 'https://images.unsplash.com/photo-1554224311-beee460201e8?w=1200&h=600&fit=crop', // Calculator and documents - rental taxation
} as const;

/**
 * Get the full URL for a blog image
 * @param imagePath - The image path from blog frontmatter (e.g., "/blog/automobile/prix-voitures-electriques-2026.jpg")
 * @returns The full URL to the image. If the image is not found in the configuration,
 *          returns a generic placeholder image from Unsplash showing a laptop/technology theme.
 */
export function getBlogImageUrl(imagePath: string): string {
  // If the path is already an absolute URL, return it as-is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  // Extract the filename without extension from the path
  const lastPart = imagePath.split('/').pop();
  if (!lastPart) {
    return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop';
  }
  
  const filename = lastPart.replace(/\.(jpg|jpeg|png|webp)$/i, '');
  
  // Verify the extension was removed (filename should be different from lastPart)
  if (filename === lastPart) {
    // No valid extension found, return fallback
    return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop';
  }
  
  if (filename in blogImages) {
    return blogImages[filename as keyof typeof blogImages];
  }
  
  // Fallback to a generic placeholder if image not found in configuration
  return 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop';
}
