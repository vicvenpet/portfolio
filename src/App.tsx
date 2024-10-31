import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Stack from './components/Stack';
import { PreFooter } from './components/Prefooter';
import { Footer } from './components/Footer';

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
      <Experience />
      <Projects />
      <Stack />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
