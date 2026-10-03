interface ProcessPhase {
  phase: string;
  title: string;
  description: string;
  milestone: string;
}

const PHASES: ProcessPhase[] = [
  {
    phase: 'PHASE 01',
    title: 'Assessment & Scoping',
    description:
      'Initial ledger evaluation, data warehouse schema audit, stakeholder objective alignment, and deliverable blueprint sign-off.',
    milestone: 'Architecture & Scope Briefing',
  },
  {
    phase: 'PHASE 02',
    title: 'Architecture & Build',
    description:
      'ETL pipeline construction, financial model calibration, Power BI data modeling, DAX validation, and executive stress testing.',
    milestone: 'Production Staging Model',
  },
  {
    phase: 'PHASE 03',
    title: 'Live Deployment & Training',
    description:
      'Enterprise distribution, automated refresh pipeline activation, executive handover session, and documentation sign-off.',
    milestone: 'Fully Autonomous Telemetry',
  },
];

export function EngagementProcessSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E5EDF7] text-[#1E5BB8] font-bold text-xs tracking-wider uppercase mb-4">
            INSTITUTIONAL CADENCE
          </span>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#0A1727] tracking-tight leading-tight mb-3">
            Engagement Process Snapshot
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-xl mx-auto font-normal">
            A disciplined, phased methodology designed to move from diagnosis to production deployment within 30 days.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {PHASES.map((item) => (
            <div
              key={item.phase}
              className="bg-[#F0F5FD] rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 border border-blue-100/70 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                <span className="inline-block bg-[#CCE2FC] text-[#1E5BB8] text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-5">
                  {item.phase}
                </span>

                
                <h3 className="font-headline font-bold text-lg sm:text-xl text-[#0A1727] tracking-tight mb-3">
                  {item.title}
                </h3>

                
                <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal mb-8">
                  {item.description}
                </p>
              </div>

              
              <div className="pt-5 border-t border-blue-200/50 flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-[#1E5BB8] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9.5" />
                  <path d="m8.5 12.5 2.5 2.5 4.5-5" />
                </svg>
                <span className="text-xs sm:text-[13px] font-semibold text-slate-700">
                  {item.milestone}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
