import React from 'react';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-black/70">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold dark:text-white">VP</div>
        <div className="flex items-center gap-4">
          <a href="/blog" className="hidden hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full hover:opacity-90"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}