import { Waypoints } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-black/70 border-b border-zinc-800 transition-all duration-300 ${
        isScrolled ? 'py-6' : 'py-2'
      }`}
    >
      <nav className="w-full px-8 md:px-12 flex justify-between items-center transition-all duration-300">
        
        <div className="text-2xl font-bold text-white px-2 py-2 rounded-full flex items-center">
          <span className="pr-2 pt-1">
            <Waypoints />
          </span>
          vicvenpet
        </div>

        <a
          href="mailto:hello@vicvenpet.xyz"
          className="text-black px-5 py-2 flex hover:opacity-90 bg-white rounded-full items-center justify-center gap-2"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
