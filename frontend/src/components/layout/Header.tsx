import { useState } from 'react';
import { Button } from '../ui/Button';
import type { NavItem } from '../../types/navigation';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
];

export function Header() {
  const [activeTab, setActiveTab] = useState<string>('home');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F4F7FA]/90 backdrop-blur-md transition-all">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col group">
          <span className="font-headline text-2xl font-extrabold tracking-tight text-[#123C56] transition-colors group-hover:text-[#0B192C]">
            BAYYINA
          </span>
          <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase">
            Where Finance Meets Analytics
          </span>
        </a>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center p-1.5 rounded-2xl gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`px-7 py-2.5 text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#104263] text-white rounded-xl shadow-none'
                    : 'text-slate-700 hover:text-slate-950 rounded-xl hover:bg-white/40'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Button variant="primary" size="md">
            Request a Service
          </Button>
        </div>
      </div>
    </header>
  );
}
