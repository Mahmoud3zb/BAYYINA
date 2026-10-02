import { HeroContent } from './HeroContent';
import { DashboardPreview } from './DashboardPreview';
import { FeaturesBar } from './FeaturesBar';

export function HeroSection() {
  return (
    <section className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-5">
            <HeroContent />
          </div>

          {/* Right Column: Dashboard Laptop Mockup */}
          <div className="lg:col-span-7">
            <DashboardPreview />
          </div>
        </div>

        {/* Bottom 4 Feature Badges Bar */}
        <FeaturesBar />
      </div>
    </section>
  );
}
