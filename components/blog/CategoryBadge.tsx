interface CategoryBadgeProps {
  category: string;
  className?: string;
}

/**
 * Badge de catégorie avec couleurs spécifiques par catégorie
 */
export default function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
  const colors: Record<string, { bg: string; text: string; emoji?: string }> = {
    finance: { bg: 'bg-emerald-500', text: 'text-white', emoji: '💰' },
    immobilier: { bg: 'bg-amber-500', text: 'text-white', emoji: '🏠' },
    'tech & gaming': { bg: 'bg-blue-500', text: 'text-white', emoji: '🎮' },
    automobile: { bg: 'bg-red-500', text: 'text-white', emoji: '🚗' },
  };

  const categoryLower = category.toLowerCase();
  // Aliases for backwards compatibility
  const aliases: Record<string, string> = {
    tech: 'tech & gaming',
    gaming: 'tech & gaming',
  };
  const resolvedCategory = aliases[categoryLower] ?? categoryLower;
  const style = colors[resolvedCategory] || { bg: 'bg-gray-500', text: 'text-white' };

  return (
    <span
      className={`px-3 py-1 ${style.bg} ${style.text} text-xs font-semibold rounded-full inline-flex items-center gap-1 ${className}`}
    >
      {style.emoji && <span>{style.emoji}</span>}
      <span>{category}</span>
    </span>
  );
}
