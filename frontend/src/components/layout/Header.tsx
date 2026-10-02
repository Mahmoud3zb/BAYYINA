import { useState, useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import type { NavItem } from '../../types/navigation';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
];

export function Header() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Apply blur/shadow when scrolled past top
      setIsScrolled(currentScrollY > 20);

      // Scroll direction logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling DOWN -> hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP -> reveal header
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#F4F7FA]/95 backdrop-blur-md shadow-xs border-b border-slate-200/50'
            : 'bg-[#F4F7FA]'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-2.5 sm:py-3 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-headline text-xl sm:text-2xl font-extrabold tracking-tight text-[#104263] transition-colors group-hover:text-[#0B192C]">
              BAYYINA
            </span>
            <span className="text-[8px] sm:text-[9px] font-semibold tracking-widest text-slate-400 uppercase">
              Where Finance Meets Analytics
            </span>
          </a>

          {/* Center Pill Navigation */}
          <nav className="hidden md:flex items-center p-1 rounded-xl gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#104263] text-white rounded-lg shadow-none'
                      : 'text-slate-700 hover:text-slate-950 rounded-lg hover:bg-white/40'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <Button variant="primary" size="sm">
              Request a Service
            </Button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent layout shift under fixed header */}
      <div className="h-14 sm:h-16" />
    </>
  );
}
