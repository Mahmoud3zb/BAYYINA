import { Button } from '../ui/Button';

export function HeroContent() {
  return (
    <div className="flex flex-col items-start space-y-6 w-full max-w-2xl">
      {/* Eyebrow Label */}
      <span className="text-xs sm:text-sm font-bold tracking-widest text-[#1E5BB8] uppercase">
        Where Finance Meets Analytics
      </span>

      {/* Main Headline */}
      <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] text-[#104263] leading-[1.1] tracking-tight">
        A clearer view for{' '}
        <span className="block text-[#104263]">smarter</span>
        <span className="block text-[#104263]">decisions.</span>
      </h1>

      {/* Paragraph Description */}
      <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-normal">
        BAYYINA helps organizations understand financial and business performance through Finance, Data Analytics, and Business Intelligence.
      </p>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-wrap items-center gap-4">
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
