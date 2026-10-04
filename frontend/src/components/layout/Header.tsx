import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { MobileNavDrawer } from './MobileNavDrawer';
import type { NavItem } from '../../types/navigation';
import logoTightImg from '../../assets/images/logo_tight.png';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;
  const activeTab =
    currentPath === '/'
      ? 'home'
      : currentPath.startsWith('/about')
      ? 'about'
      : currentPath.startsWith('/services')
      ? 'services'
      : currentPath.startsWith('/request')
      ? 'request'
      : '';

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
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
          <Link
            to="/"
            className="flex items-center gap-2 group cursor-pointer py-0.5"
          >
            <img
              src={logoTightImg}
              alt="BAYINA | بينة"
              className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto max-w-[180px] sm:max-w-[210px] md:max-w-[230px] object-contain transition-transform group-hover:scale-102"
            />
          </Link>

          <nav className="hidden md:flex items-center p-1 rounded-xl gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`px-5 py-2 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#104263] text-white rounded-lg shadow-none'
                      : 'text-slate-700 hover:text-slate-950 rounded-lg hover:bg-white/40'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="hidden md:block">
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/request')}
                className={activeTab === 'request' ? 'ring-2 ring-offset-2 ring-[#104263] shadow-md' : ''}
              >
                Request a Service
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 border border-slate-200/80 text-slate-700 hover:text-[#104263] hover:bg-slate-100 transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-5 h-5 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeTab={activeTab}
        navItems={NAV_ITEMS}
      />

      <div className="h-14 sm:h-16" />
    </>
  );
}
