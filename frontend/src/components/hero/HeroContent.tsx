import { Button } from '../ui/Button';

export function HeroContent() {
  return (
    <div className="flex flex-col items-start space-y-4 lg:space-y-5 w-full max-w-2xl">
      {/* Eyebrow Label */}
      <span className="text-xs sm:text-sm font-bold tracking-widest text-[#1E5BB8] uppercase">
        Where Finance Meets Analytics
      </span>

      {/* Main Headline */}
      <h1 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-[48px] xl:text-[56px] text-[#104263] leading-[1.12] tracking-tight">
        A clearer view for{' '}
        <span className="block text-[#104263]">smarter</span>
        <span className="block text-[#104263]">decisions.</span>
      </h1>

      {/* Paragraph Description */}
      <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl font-normal">
        BAYYINA helps organizations understand financial and business performance through Finance, Data Analytics, and Business Intelligence.
      </p>

      {/* Action Buttons */}
      <div className="pt-1 flex flex-wrap items-center gap-3.5">
        <Button variant="primary" size="lg">
          Request a Service
        </Button>
        <Button variant="outline" size="lg">
          Explore Our Services
        </Button>
      </div>
    </div>
  );
}
