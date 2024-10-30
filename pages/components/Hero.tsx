import React from 'react';
import { Download, CalendarSearch } from 'lucide-react';

export default function Hero() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-4 dark:bg-black dark:text-white">
      <h1 className="text-6xl md:text-7xl font-bold mb-6">Víctor Petkov</h1>
      <h2 className="text-2xl md:text-3xl mb-4">high-tech work.</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        contributing repos of my interest.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <a href="https://drive.google.com/uc?export=download&id=1h4AC51mN0CU5fv2gV7YYf0QJFPAasXXT">
          <button className="w-full px-6 py-3 flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black rounded-full hover:opacity-90">
            <Download size={20} />
            Download Resume
          </button>
        </a>

        <div className="relative dark:hover:text-gray-200">
          <a href="https://vicvenpet.setmore.com/">
            <button className="w-full px-6 py-3 pr-14 rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Book a Call
            </button>
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pr-3">
            <CalendarSearch size={20} />
            </button>
          </a>
        </div>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <span className="inline-flex items-center gap-2">
          <span className='relative inline-flex items-center'>
            <span className="w-3 h-3 bg-green-500 rounded-full -ml-0 animate-ping"></span>
            <span className="w-2 h-2 bg-green-200 rounded-full absolute inset-0 m-auto"></span>
          </span>
          Available for new projects
        </span>
      </div>
      
    </main>
  );
}