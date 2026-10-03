import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';
import { RealExamplesSection } from './components/examples/RealExamplesSection';
import { CoreSolutionsSection } from './components/solutions/CoreSolutionsSection';
import { TechnologySection } from './components/technology/TechnologySection';
import { ProcessSection } from './components/process/ProcessSection';
import { CtaSection } from './components/cta/CtaSection';
import { AboutHeroSection } from './components/about/AboutHeroSection';
import { AboutUsSection } from './components/about/AboutUsSection';
import { WhatWeDoSection } from './components/about/WhatWeDoSection';
import { WhyWeDoItSection } from './components/about/WhyWeDoItSection';
import { TheBayyinaWaySection } from './components/about/TheBayyinaWaySection';
import { Footer } from './components/layout/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('about');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about') {
        setCurrentPage('about');
      } else if (hash === 'home' || hash === '') {
        setCurrentPage('home');
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tabId: string) => {
    setCurrentPage(tabId);
    window.location.hash = tabId === 'home' ? '' : tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-slate-800 flex flex-col antialiased">
      <Header activeTab={currentPage} onTabChange={handleTabChange} />
      <main className="flex-1">
        {currentPage === 'about' ? (
          <>
            <AboutHeroSection />
            <AboutUsSection />
            <WhatWeDoSection />
            <WhyWeDoItSection />
            <TheBayyinaWaySection />
            <CtaSection />
          </>
        ) : (
          <>
            <HeroSection />
            <RealExamplesSection />
            <CoreSolutionsSection />
            <TechnologySection />
            <ProcessSection />
            <CtaSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
