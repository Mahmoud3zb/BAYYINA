import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';
import { RealExamplesSection } from './components/examples/RealExamplesSection';
import { CoreSolutionsSection } from './components/solutions/CoreSolutionsSection';
import { TechnologySection } from './components/technology/TechnologySection';
import { CtaSection } from './components/cta/CtaSection';
import { AboutHeroSection } from './components/about/AboutHeroSection';
import { AboutUsSection } from './components/about/AboutUsSection';
import { WhatWeDoSection } from './components/about/WhatWeDoSection';
import { WhyWeDoItSection } from './components/about/WhyWeDoItSection';
import { OneBusinessSection } from './components/about/OneBusinessSection';

import { ServicesHeroSection } from './components/services/ServicesHeroSection';
import { ServicesShowcaseSection } from './components/services/ServicesShowcaseSection';
import { ChooseYourServicesSection } from './components/services/ChooseYourServicesSection';
import { EngagementProcessSection } from './components/services/EngagementProcessSection';
import { RequestServicePage } from './components/request/RequestServicePage';
import { Footer } from './components/layout/Footer';

const getInitialPage = (): string => {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '').trim().toLowerCase();
  if (hash === 'request' || hash === 'request-service') return 'request';
  if (hash === 'services') return 'services';
  if (hash === 'about') return 'about';
  return 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState<string>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim().toLowerCase();
      if (hash === 'request' || hash === 'request-service') {
        setCurrentPage('request');
      } else if (hash === 'services') {
        setCurrentPage('services');
      } else if (hash === 'about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tabId: string) => {
    setCurrentPage(tabId);
    if (tabId === 'home') {
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
    } else {
      window.location.hash = tabId;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-slate-800 flex flex-col antialiased">
      <Header activeTab={currentPage} onTabChange={handleTabChange} />
      <main className="flex-1">
        {currentPage === 'request' ? (
          <RequestServicePage />
        ) : currentPage === 'services' ? (
          <>
            <ServicesHeroSection />
            <ServicesShowcaseSection />
            <ChooseYourServicesSection />
            <EngagementProcessSection />
            <CtaSection />
          </>
        ) : currentPage === 'about' ? (
          <>
            <AboutHeroSection />
            <AboutUsSection />
            <WhatWeDoSection />
            <WhyWeDoItSection />
            <OneBusinessSection />
            
            <CtaSection />
          </>
        ) : (
          <>
            <HeroSection />
            <RealExamplesSection />
            <CoreSolutionsSection />
            <TechnologySection />
            <CtaSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
