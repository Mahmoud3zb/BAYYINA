import { HeroSection } from '../components/hero/HeroSection';
import { RealExamplesSection } from '../components/examples/RealExamplesSection';
import { CoreSolutionsSection } from '../components/solutions/CoreSolutionsSection';
import { TechnologySection } from '../components/technology/TechnologySection';
import { CtaSection } from '../components/cta/CtaSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <RealExamplesSection />
      <CoreSolutionsSection />
      <TechnologySection />
      <CtaSection />
    </>
  );
}
