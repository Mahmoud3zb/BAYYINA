import { HeroContent } from './HeroContent';
import { DashboardPreview } from './DashboardPreview';
import { FeaturesBar } from './FeaturesBar';

export function HeroSection() {
  return (
    <section className="relative lg:min-h-[calc(100vh-65px)] flex flex-col justify-between pt-4 pb-8 lg:pt-4 lg:pb-8 overflow-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-between">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto py-2 lg:py-4">
          
          <div className="lg:col-span-5">
            <HeroContent />
          </div>

          
          <div className="lg:col-span-7">
            <DashboardPreview />
          </div>
        </div>

        
        <div className="mt-auto pt-3 lg:pt-5">
          <FeaturesBar />
        </div>
      </div>
    </section>
  );
}
