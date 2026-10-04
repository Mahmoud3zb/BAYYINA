import { AboutHeroSection } from '../components/about/AboutHeroSection';
import { AboutUsSection } from '../components/about/AboutUsSection';
import { WhatWeDoSection } from '../components/about/WhatWeDoSection';
import { WhyWeDoItSection } from '../components/about/WhyWeDoItSection';
import { OneBusinessSection } from '../components/about/OneBusinessSection';
import { CtaSection } from '../components/cta/CtaSection';

export function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutUsSection />
      <WhatWeDoSection />
      <WhyWeDoItSection />
      <OneBusinessSection />
      <CtaSection />
    </>
  );
}
