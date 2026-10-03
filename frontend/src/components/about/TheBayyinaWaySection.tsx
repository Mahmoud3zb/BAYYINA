export function TheBayyinaWaySection() {
  const steps = [
    {
      number: '01',
      label: 'Data',
      description: 'Financial & Operational Information',
      icon: (
        <svg className="w-8 h-8 text-[#1E5BB8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 5V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 12V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '02',
      label: 'Analysis',
      description: 'Structure · Compare · Identify · Understand',
      icon: (
        <svg className="w-8 h-8 text-[#1E5BB8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 20H21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      number: '03',
      label: 'Insight',
      description: 'Trends · Drivers · Opportunities · Risks',
      icon: (
        <svg className="w-8 h-8 text-[#1E5BB8]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.8 8.2C14.3 9.7 15.3 10.7 16.8 11.2L23 13L16.8 14.8C15.3 15.3 14.3 16.3 13.8 17.8L12 24L10.2 17.8C9.7 16.3 8.7 15.3 7.2 14.8L1 13L7.2 11.2C8.7 10.7 9.7 9.7 10.2 8.2L12 2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="18.5" cy="5.5" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      number: '04',
      label: 'Action',
      description: 'Monitor · Improve · Decide',
      icon: (
        <svg className="w-8 h-8 text-[#1E5BB8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 17L9 11L13 15L21 7M21 7H15M21 7V13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="font-semibold text-xs sm:text-[13px] uppercase tracking-[0.2em] text-[#1E5BB8] mb-3 sm:mb-4 block">
            THE BAYYINA WAY
          </span>
          <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-[42px] text-[#0B192C] tracking-tight leading-[1.22] uppercase">
            FROM INFORMATION TO <br />
            INTELLIGENCE
          </h2>
        </div>

        {/* Steps Flow with Connecting Arrows */}
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 items-start">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group cursor-default">
                {/* Step Number */}
                <span className="font-headline font-bold text-xs sm:text-sm text-[#1E5BB8] mb-3 block tracking-wide">
                  {step.number}
                </span>

                {/* Icon Squircle Box */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[22px] sm:rounded-[26px] bg-[#EEF5FF] flex items-center justify-center shadow-xs border border-blue-50/50 group-hover:scale-108 group-hover:bg-[#E2EFFF] group-hover:shadow-md transition-all duration-300 mb-4">
                  {step.icon}
                </div>

                {/* Step Label */}
                <span className="font-headline font-bold text-base sm:text-lg text-[#0A1727] tracking-tight mb-2">
                  {step.label}
                </span>

                {/* Step Secondary Description */}
                <p className="text-xs sm:text-[13px] text-slate-500 font-medium leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Connecting Right Arrow (for desktop, between items) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-12 -right-4 -translate-y-1/2 translate-x-1/2 text-slate-300 pointer-events-none z-10">
                    <svg
                      className="w-5 h-5 text-slate-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Concluding Philosophy Banner */}
        <div className="mt-16 sm:mt-24 max-w-3xl mx-auto text-center">
          <div className="p-8 sm:p-10 rounded-[28px] bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] border border-slate-200/80 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#1E5BB8] to-transparent" />
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-4">
              Technology may change. The data sources may change. The reporting environment may change.
            </p>
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#1E5BB8] mb-1.5">
                The objective remains the same
              </span>
              <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#0A1727] tracking-tight">
                Make business easier to understand.
              </h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
