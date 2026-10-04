import { useParams } from 'react-router-dom';
import { ServicesHeroSection } from '../components/services/ServicesHeroSection';
import { ServicesShowcaseSection } from '../components/services/ServicesShowcaseSection';
import { ChooseYourServicesSection } from '../components/services/ChooseYourServicesSection';
import { EngagementProcessSection } from '../components/services/EngagementProcessSection';
import { CtaSection } from '../components/cta/CtaSection';

export function ServicesPage() {
  const { categoryId } = useParams<{ categoryId?: string }>();

  return (
    <>
      <ServicesHeroSection />
      <ServicesShowcaseSection />
      <ChooseYourServicesSection categoryParam={categoryId} />
      <EngagementProcessSection />
      <CtaSection />
    </>
  );
}
