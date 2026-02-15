"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

/**
 * Sticky table of contents with active section highlighting
 * Uses Intersection Observer for automatic active state
 */
export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );
    
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    
    return () => observer.disconnect();
  }, [headings]);
  
  if (headings.length === 0) {
    return null;
  }
  
  return (
    <nav className="sticky top-24 hidden lg:block">
      <p className="font-semibold mb-4 text-zinc-900 dark:text-zinc-50">
        Table des matières
      </p>
      <ul className="space-y-2 text-sm border-l-2 border-zinc-200 dark:border-zinc-800">
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            className={cn(
              'transition-colors border-l-2 -ml-[2px]',
              level === 3 && 'pl-4',
              activeId === id
                ? 'border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium'
                : 'border-transparent text-zinc-600 dark:text-zinc-400'
            )}
          >
            <a 
              href={`#${id}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 block py-1 px-4"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
