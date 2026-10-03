interface Perspective {
  id: string;
  name: string;
  metrics: string[];
  icon: (props: { className?: string }) => React.JSX.Element;
}

const PERSPECTIVES: Perspective[] = [
  {
    id: 'finance',
    name: 'FINANCE',
    metrics: ['Profitability', 'Cash Flow', 'Margins', 'Financial Performance'],
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
  },
  {
    id: 'sales',
    name: 'SALES',
    metrics: ['Revenue', 'Customers', 'Targets', 'Growth', 'Pipeline'],
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 7L13.5 15.5L8.5 10.5L2 17" />
        <path d="M16 7H22V13" />
      </svg>
    ),
  },
  {
    id: 'operations',
    name: 'OPERATIONS',
    metrics: ['Productivity', 'Efficiency', 'Output', 'Performance'],
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: 'hr',
    name: 'HR',
    metrics: ['Headcount', 'Workforce', 'Attendance', 'Turnover'],
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'procurement',
    name: 'PROCUREMENT',
    metrics: ['Spend', 'Suppliers', 'Purchasing', 'Cost Trends'],
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 'management',
    name: 'MANAGEMENT',
    metrics: ['KPIs', 'Performance', 'Trends', 'Business Overview'],
    icon: ({ className }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

export function OneBusinessSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-28 relative border-y border-slate-200/50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.2em] text-[#1E5BB8] mb-3 block">
            MULTIPLE PERSPECTIVES
          </span>
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-[40px] text-[#0A1727] tracking-tight leading-tight uppercase mb-4">
            ONE BUSINESS. MULTIPLE PERSPECTIVES.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            A business does not operate through one set of numbers. BAYYINA connects these perspectives to create a more complete understanding of how the business is performing.
          </p>
        </div>

        {/* 6 Perspectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1240px] mx-auto">
          {PERSPECTIVES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-[26px] p-7 sm:p-8 border border-slate-200/70 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header with Icon + Title */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-[16px] bg-[#EEF5FF] text-[#1E5BB8] flex items-center justify-center group-hover:scale-108 group-hover:bg-[#E2EFFF] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-headline font-bold text-lg sm:text-xl text-[#0A1727] tracking-tight">
                      {item.name}
                    </h3>
                  </div>

                  {/* Metrics Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="inline-flex items-center text-xs sm:text-[13px] font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 rounded-full px-3.5 py-1.5 transition-colors"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Subtle bottom accent line */}
                <div className="w-full h-1 bg-gradient-to-r from-[#1E5BB8]/0 via-[#1E5BB8]/30 to-[#1E5BB8]/0 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Closing Connecting Message */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#104263] bg-white border border-slate-200/80 px-6 py-3 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#1E5BB8] animate-pulse" />
            BAYYINA connects these perspectives to create a complete understanding of how the business is performing.
          </p>
        </div>
      </div>
    </section>
  );
}
