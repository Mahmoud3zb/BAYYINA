function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#1E5BB8] shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 10.2L8.8 12.5L13.5 7.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
  );
}

const FINANCE_ITEMS = [
  'Financial Statement Analysis',
  'Management Reporting',
  'FP&A',
  'Cash Flow Intelligence',
  'Profitability Analysis',
  'Dynamic Financial Modeling',
];

const ANALYTICS_GRID: string[][] = [
  ['Sales Analytics', 'Customer Analytics'],
  ['Inventory Analytics', 'HR Analytics'],
];

const ANALYTICS_STACKED = [
  'Procurement Analytics',
  'Marketing Analytics',
  'Operations Analytics',
  'Expense Analytics',
  'Production Analytics',
];

const BI_ITEMS = [
  'Executive Intelligence',
  'Department Intelligence',
  'Live Business Dashboards',
  'KPI & Performance Intelligence',
  'Management Reporting Automation',
  'Real-Time Decision Support',
];

export function CoreSolutionsSection() {
  return (
    <section
      id="services"
      style={{ backgroundColor: '#1E3E62' }}
      className="relative bg-[#1E3E62] py-20 md:py-28 overflow-hidden text-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-[1140px] mx-auto">
          {/* Section Header */}
          <div className="max-w-2xl mb-14 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#82B3D4] uppercase block mb-3">
              Our Core Solutions
            </span>
            <h2 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.1] mb-5">
              Finance. Analytics. <br className="hidden sm:inline" />
              Intelligence.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Integrated solutions designed around your business needs. Institutional rigor engineered for strategic agility.
            </p>
          </div>

          {/* 3 Core Solutions Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-start">
          
          {/* Card 1: Finance */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 flex flex-col justify-between min-h-[560px] lg:min-h-[575px] ring-2 ring-sky-400/80 shadow-[0_0_35px_rgba(37,99,235,0.65),0_0_70px_rgba(30,76,138,0.5)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(37,99,235,0.85),0_0_90px_rgba(30,76,138,0.7)] cursor-pointer">
            <div>
              {/* Badge */}
              <span className="inline-block bg-[#F1F5F9] text-[#1E3E62] text-xs font-bold px-3.5 py-1.5 rounded-lg tracking-wider uppercase mb-6">
                Finance
              </span>

              {/* Title */}
              <h3 className="font-headline font-extrabold text-2xl sm:text-[26px] text-[#0B192C] leading-snug mb-6">
                Understand the numbers behind the business.
              </h3>

              {/* Checklist */}
              <ul className="space-y-3.5">
                {FINANCE_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-slate-700 font-medium text-sm sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Link */}
            <div className="pt-6 mt-8 border-t border-slate-100">
              <a
                href="#finance"
                className="group inline-flex items-center gap-2 text-[#1E5BB8] font-bold text-sm hover:text-[#0B192C] transition-colors"
              >
                <span>Explore Finance</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          {/* Card 2: Data Analytics (Intentionally longer at the bottom) */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 pb-12 sm:pb-14 flex flex-col justify-between min-h-[610px] lg:min-h-[630px] ring-2 ring-sky-400/80 shadow-[0_0_35px_rgba(37,99,235,0.65),0_0_70px_rgba(30,76,138,0.5)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(37,99,235,0.85),0_0_90px_rgba(30,76,138,0.7)] cursor-pointer">
            <div>
              {/* Badge */}
              <span className="inline-block bg-[#F1F5F9] text-[#1E3E62] text-xs font-bold px-3.5 py-1.5 rounded-lg tracking-wider uppercase mb-6">
                Data Analytics
              </span>

              {/* Title */}
              <h3 className="font-headline font-extrabold text-2xl sm:text-[26px] text-[#0B192C] leading-snug mb-6">
                Turn business data into meaningful insight.
              </h3>

              {/* Badges / Pill Tags Grid */}
              <div className="space-y-2">
                {/* 2-columns top tags */}
                {ANALYTICS_GRID.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-2 gap-2">
                    {row.map((tag) => (
                      <div
                        key={tag}
                        className="bg-[#F1F5F9] text-slate-800 text-xs sm:text-[13px] font-semibold py-1.5 px-2.5 rounded-lg text-center transition-colors hover:bg-slate-200/70 truncate"
                        title={tag}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                ))}

                {/* Full-width stacked tags */}
                {ANALYTICS_STACKED.map((tag) => (
                  <div
                    key={tag}
                    className="bg-[#F1F5F9] text-slate-800 text-xs sm:text-[13px] font-semibold py-1.5 px-3 rounded-lg text-center transition-colors hover:bg-slate-200/70"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Link */}
            <div className="pt-6 mt-8 border-t border-slate-100">
              <a
                href="#analytics"
                className="group inline-flex items-center gap-2 text-[#1E5BB8] font-bold text-sm hover:text-[#0B192C] transition-colors"
              >
                <span>Explore Data Analytics</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>

          {/* Card 3: Business Intelligence (Radiant Neon Glow Aura) */}
          <div className="bg-white rounded-[32px] p-8 sm:p-10 flex flex-col justify-between min-h-[560px] lg:min-h-[575px] ring-2 ring-sky-400/80 shadow-[0_0_35px_rgba(37,99,235,0.65),0_0_70px_rgba(30,76,138,0.5)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(37,99,235,0.85),0_0_90px_rgba(30,76,138,0.7)] cursor-pointer">
            <div>
              {/* Badge */}
              <span className="inline-block bg-[#F1F5F9] text-[#1E3E62] text-xs font-bold px-3.5 py-1.5 rounded-lg tracking-wider uppercase mb-6">
                Business Intelligence
              </span>

              {/* Title */}
              <h3 className="font-headline font-extrabold text-2xl sm:text-[26px] text-[#0B192C] leading-snug mb-6">
                Give every part of the business a clearer view of performance.
              </h3>

              {/* Checklist */}
              <ul className="space-y-3.5">
                {BI_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-slate-700 font-medium text-sm sm:text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Link */}
            <div className="pt-6 mt-8 border-t border-slate-100">
              <a
                href="#intelligence"
                className="group inline-flex items-center gap-2 text-[#1E5BB8] font-bold text-sm hover:text-[#0B192C] transition-colors"
              >
                <span>Explore Business Intelligence</span>
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

