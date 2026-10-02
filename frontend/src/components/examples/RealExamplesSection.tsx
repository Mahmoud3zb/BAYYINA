import { useState } from 'react';
import financialSampleImg from '../../assets/images/Financial Performance (Sample).png';

interface DashboardTab {
  id: string;
  label: string;
  description?: string;
}

const DASHBOARD_TABS: DashboardTab[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'profit-loss', label: 'Profit & Loss' },
  { id: 'balance-sheet', label: 'Balance Sheet' },
  { id: 'cash-flow', label: 'Cash Flow' },
];

export function RealExamplesSection() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const totalSlides = 4;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section id="real-examples" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#1E5BB8] uppercase block mb-3">
            Business Intelligence
          </span>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0B192C] tracking-tight leading-tight mb-4">
            Real Examples. Real Impact.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Explore sample dashboards that demonstrate how financial and operational data can be transformed into clearer views of performance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {DASHBOARD_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#104263] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/80 shadow-xs'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dashboard Showcase Slider (Matching FeaturesBar width) */}
        <div className="relative w-full mx-auto flex items-center justify-center">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Dashboard"
            className="absolute -left-3 sm:-left-5 lg:-left-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-[#104263] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Dashboard Card */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white transition-all duration-300">
            <img
              src={financialSampleImg}
              alt="Financial Performance Dashboard Example"
              className="w-full h-auto object-cover block"
              loading="lazy"
            />
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Dashboard"
            className="absolute -right-3 sm:-right-5 lg:-right-6 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-[#104263] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Disclaimer / Illustration Caption */}
        <p className="text-xs text-slate-400 font-medium text-center mt-6 mb-3">
          Sample dashboard for illustration only. All figures shown are fictional.
        </p>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === idx
                  ? 'w-6 h-1.5 bg-[#104263]'
                  : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
