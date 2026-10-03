import { useState } from 'react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'financial-analysis',
    title: 'Financial Analysis',
    description:
      'Understanding profitability, cash flow, financial performance, trends, and the factors affecting results.',
    icon: ({ className }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="7"
          width="18"
          height="14"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 12H14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description:
      'Analyzing business data to identify patterns, changes, opportunities, inefficiencies, and areas requiring attention.',
    icon: ({ className }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="12"
          cy="5"
          rx="8"
          ry="3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 5V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    description:
      'Developing dashboards, reporting environments, KPIs, and management views that make important information easier to monitor and understand.',
    icon: ({ className }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.21 15.89A10 10 0 1 1 8 2.83"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12A10 10 0 0 0 12 2V12H22Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function WhatWeDoSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SERVICES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
  };

  // Reorder items according to currentIndex for smooth carousel cycling
  const displayedServices = [
    ...SERVICES.slice(currentIndex),
    ...SERVICES.slice(0, currentIndex),
  ];

  return (
    <section className="bg-[#104263] py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            What we do?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-2xl mx-auto">
            We turn business information into a clearer view of performance across financial statements, sales, operations, and management.
          </p>
        </div>

        {/* Carousel Container with Side Arrows */}
        <div className="relative flex items-center justify-center gap-3 sm:gap-5 lg:gap-7 max-w-[1360px] mx-auto">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-xs shrink-0 border border-white/10 shadow-sm"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 10H4M4 10L9.5 4.5M4 10L9.5 15.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full">
            {displayedServices.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-9 lg:p-10 flex flex-col items-center text-center shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 border border-slate-100 group"
                >
                  {/* Icon Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[22px] bg-[#EEF5FF] flex items-center justify-center mb-6 text-[#1E5BB8] group-hover:scale-110 group-hover:bg-[#E2EFFF] transition-all duration-300">
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="font-headline font-bold text-xl sm:text-[22px] text-[#0A1727] text-center mb-4 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Divider Line */}
                  <div className="w-full h-[1px] bg-slate-100 mb-5" />

                  {/* Description */}
                  <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed text-center font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all duration-200 cursor-pointer backdrop-blur-xs shrink-0 border border-white/10 shadow-sm"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10H16M16 10L10.5 4.5M16 10L10.5 15.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Client Note */}
        <p className="text-center text-slate-300/80 text-xs sm:text-sm max-w-2xl mx-auto mt-10 sm:mt-12 font-medium leading-relaxed">
          The objective is not simply to produce another report or dashboard. It is to create information that is relevant, connected, understandable, and useful for decision-making.
        </p>
      </div>
    </section>
  );
}
