/**
 * Centralized configuration for blog article images
 * All images are loaded from external URLs instead of local assets
 */

export const blogImages = {
  // Automobile category
  'batterie-ev-vie-utile': 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=600&fit=crop',
  'bornes-recharge-france-2026': 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=1200&h=600&fit=crop',
  'full-elec-comparatif-2026': 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&h=600&fit=crop',
  'futur-automobile-2030': 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=600&fit=crop',
  'leasing-ev-vs-essence': 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=600&fit=crop',
  'peugeot-citroen-3-motorisations': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=600&fit=crop',
  'prix-voitures-electriques-2026': 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=600&fit=crop',
  'puretech-problemes-garantie': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=600&fit=crop',
  
  // Finance & Investment
  'etf-2026': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop',
  'fiscalite-2026': 'https://images.unsplash.com/photo-1554224311-beee460201e8?w=1200&h=600&fit=crop',
  'pea-2026': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=600&fit=crop',
  
  // Real Estate
  'immo-grand-est': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
  
  // Development
  'outils-dev-2026': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop',
} as const;

/**
 * Get the full URL for a blog image
 * @param imagePath - The image path from blog frontmatter (e.g., "/blog/automobile/prix-voitures-electriques-2026.jpg")
 * @returns The full URL to the image. If the image is not found in the configuration,
 *          returns a generic placeholder image from Unsplash showing a laptop/technology theme.
 */
export function getBlogImageUrl(imagePath: string): string {
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
