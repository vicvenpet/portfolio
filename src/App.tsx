import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stack from './components/Stack';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('white');
    }
  }, [isDark]);


  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <Header />
      <Hero />
      <Projects />
      <Stack />
    </div>
  );
}

export default App;
