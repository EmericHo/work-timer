import Link from 'next/link';

interface RecommendedToolsProps {
  tools: string[];
}

/**
 * Recommended Veldra tools section
 * Displays related calculators and tools
 */
export function RecommendedTools({ tools }: RecommendedToolsProps) {
  if (!tools || tools.length === 0) {
    return null;
  }
  
  return (
    <div className="my-12 p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
        </svg>
        Outils Veldra recommandés
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool}
            href={`/${tool}`}
            className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-950 rounded-lg hover:shadow-md dark:hover:bg-zinc-800 transition-all border border-zinc-200 dark:border-zinc-800 group"
          >
            <div className="w-10 h-10 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="font-medium text-zinc-900 dark:text-zinc-50 capitalize group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {tool.replace(/-/g, ' ')}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
