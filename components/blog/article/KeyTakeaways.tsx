interface KeyTakeawaysProps {
  points: string[];
}

/**
 * Key takeaways summary box for article
 * Displays main actionable points from the article
 */
export function KeyTakeaways({ points }: KeyTakeawaysProps) {
  if (!points || points.length === 0) {
    return null;
  }
  
  return (
    <div className="my-12 p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg">
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Points clés à retenir
      </h3>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-zinc-700 dark:text-zinc-200 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
