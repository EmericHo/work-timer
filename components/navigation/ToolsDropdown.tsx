'use client';

import { useState } from 'react';
import Link from 'next/link';

const toolCategories = [
  {
    name: 'Finance',
    tools: [
      { name: 'Simulateur PEA', href: '/calculatrice-fiscale' },
      { name: 'Calculateur Dividendes', href: '/calculateur-roi' },
      { name: 'Backtest ETF', href: '/calculateur-interets-composes' },
      { name: 'SCPI', href: '/simulateur-scpi' },
      { name: 'Bilan SCI', href: '/generateur-bilan-sci' },
    ],
  },
  {
    name: 'Immobilier',
    tools: [
      { name: 'Rendement Locatif', href: '/calculateur-roi' },
      { name: 'Simulateur Crédit', href: '/calculateur-credit-immobilier' },
      { name: 'Cashflow Immo', href: '/planificateur-budget' },
    ],
  },
  {
    name: 'Tech',
    tools: [
      { name: 'Générateur Palette', href: '/generateur-palette-couleurs' },
      { name: 'JSON Formatter', href: '/json-formatter' },
      { name: 'Minificateur CSS', href: '/minificateur-css-js' },
      { name: 'Compresseur Image', href: '/compresseur-image' },
    ],
  },
];

export default function ToolsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Outils
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="p-6 grid grid-cols-3 gap-6">
            {toolCategories.map((category) => (
              <div key={category.name}>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wider">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.tools.map((tool) => (
                    <li key={tool.href}>
                      <Link
                        href={tool.href}
                        className="block text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        {tool.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <Link
              href="/outils"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
              onClick={() => setIsOpen(false)}
            >
              Voir tous les outils →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
