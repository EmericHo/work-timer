'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeToggle from '@/components/theme/ThemeToggle';
import LanguageSelector from './LanguageSelector';
import ToolsDropdown from './ToolsDropdown';

const navLinkVariants = {
  rest: { opacity: 1, scale: 1 },
  hover: { opacity: 0.85, scale: 1.05 },
};

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Veldra
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            <motion.div variants={navLinkVariants} initial="rest" whileHover="hover" transition={{ duration: 0.15 }}>
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Accueil
              </Link>
            </motion.div>
            <motion.div variants={navLinkVariants} initial="rest" whileHover="hover" transition={{ duration: 0.15 }}>
              <Link
                href="/blog"
                className="px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                Blog
              </Link>
            </motion.div>
            <ToolsDropdown />
          </div>

          {/* Language Selector & Theme Toggle */}
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
