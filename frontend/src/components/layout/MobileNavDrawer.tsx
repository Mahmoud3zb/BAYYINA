import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import type { NavItem } from '../../types/navigation';
import logoTightImg from '../../assets/images/logo_tight.png';

interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  navItems: NavItem[];
}

export function MobileNavDrawer({
  isOpen,
  onClose,
  activeTab,
  navItems,
}: MobileNavDrawerProps) {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300"
        aria-hidden="true"
      />

      
      <div
        className="fixed top-0 right-0 bottom-0 w-[82%] max-w-[340px] bg-[#FAFBFD] shadow-2xl flex flex-col justify-between p-6 z-10 animate-in slide-in-from-right duration-300 ease-out border-l border-slate-200/80"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-slate-200/70 mb-6">
            <div
              onClick={() => handleNavigate('/')}
              className="flex items-center cursor-pointer"
            >
              <img
                src={logoTightImg}
                alt="BAYINA | بينة"
                className="h-8 w-auto max-w-[170px] object-contain"
              />
            </div>

            
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors shadow-xs active:scale-95 cursor-pointer"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

         
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 block mb-2">
              Navigation
            </span>

            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.href)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#104263] text-white shadow-md shadow-[#104263]/20'
                      : 'text-slate-700 hover:bg-slate-200/60 hover:text-slate-900 bg-white/70 border border-slate-200/50'
                  }`}
                >
                  <span>{item.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-white' : 'text-slate-400'
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 5l5 5-5 5" />
                  </svg>
                </button>
              );
            })}
          </div>
        </div>

        
        <div className="pt-6 border-t border-slate-200/70 space-y-4">
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleNavigate('/request')}
            className="w-full justify-center shadow-lg shadow-[#104263]/20"
          >
            Request a Service
          </Button>

          <div className="text-center">
            <p className="text-[11px] text-slate-400 font-medium">
              Institutions &amp; Enterprises Advisory
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
