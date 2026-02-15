/**
 * Extract headings from MDX content for table of contents
 */
export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  let match;
  
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    
    headings.push({
      id,
      text,
      level,
    });
  }
  
  return headings;
}

/**
 * Generate key takeaways from article content
 * Extracts main points, preferably bullet points or numbered lists
 */
export function extractKeyTakeaways(content: string, maxPoints: number = 3): string[] {
  const takeaways: string[] = [];
  
  // Try to extract bullet points
  const bulletRegex = /^[-*]\s+(.+)$/gm;
  let match;
  
  while ((match = bulletRegex.exec(content)) !== null && takeaways.length < maxPoints) {
    const point = match[1].trim();
    if (point.length > 20 && point.length < 200) {
      takeaways.push(point);
    }
  }
  
  return takeaways;
}
