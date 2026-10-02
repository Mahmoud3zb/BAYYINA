import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';
import { RealExamplesSection } from './components/examples/RealExamplesSection';
import { CoreSolutionsSection } from './components/solutions/CoreSolutionsSection';
import { TechnologySection } from './components/technology/TechnologySection';
import { ProcessSection } from './components/process/ProcessSection';
import { CtaSection } from './components/cta/CtaSection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F7FA] font-sans text-slate-800 flex flex-col antialiased">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <RealExamplesSection />
        <CoreSolutionsSection />
        <TechnologySection />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
