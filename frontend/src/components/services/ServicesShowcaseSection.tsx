import serviceImg from '../../assets/images/service.png';

export function ServicesShowcaseSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-t border-slate-200/60">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="max-w-4xl mb-10 sm:mb-12">
          <h2 className="font-headline font-bold text-4xl sm:text-5xl lg:text-[54px] text-[#0A1727] tracking-tight leading-none mb-3 sm:mb-4">
            Services
          </h2>
          <h3 className="font-headline font-semibold text-xl sm:text-2xl text-[#103854] tracking-tight mb-2 sm:mb-3">
            Intelligence Built Around Your Business.
          </h3>
          <p className="text-slate-500 sm:text-slate-600 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-2xl font-normal">
            Explore solutions designed to help you understand, monitor, improve, and manage your business performance with institutional precision.
          </p>
        </div>

        
        <div className="bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.06)] border border-slate-200/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
           
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#1E5BB8] mb-4 sm:mb-5">
                <svg className="w-4 h-4 shrink-0 text-[#1E5BB8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9.5" />
                  <path d="m8.5 12.5 2.5 2.5 4.5-5" />
                </svg>
                <span>C-Suite Institutional Grade</span>
              </div>

             
              <h4 className="font-headline font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#0A1727] leading-[1.16] tracking-tight mb-4 sm:mb-5">
                From Raw <br className="hidden sm:inline" />
                Transactions <br className="hidden sm:inline" />
                to Sovereign Clarity.
              </h4>

              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-8 sm:mb-10 max-w-md">
                We design, construct, and automate real-time intelligence infrastructure that gives executives frictionless command over balance sheets, operating margins, and growth levers.
              </p>

             
              <div className="bg-[#EEF5FF] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 border border-blue-100/60">
                <div className="grid grid-cols-3 divide-x divide-blue-200/60">
                 
                  <div className="pr-3 sm:pr-4">
                    <span className="font-headline font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#0A1727] tracking-tight leading-none block">
                      100
                    </span>
                    <span className="text-xs sm:text-[13px] text-slate-500 font-medium block mt-2">
                      Audit-Ready
                    </span>
                  </div>

                  
                  <div className="px-3 sm:px-5">
                    <span className="font-headline font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#0A1727] tracking-tight leading-none block">
                      1 min
                    </span>
                    <span className="text-xs sm:text-[13px] text-slate-500 font-medium block mt-2">
                      Live Pipeline
                    </span>
                  </div>

                  
                  <div className="pl-3 sm:pl-5">
                    <span className="font-headline font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#0A1727] tracking-tight leading-none block">
                      4Wk
                    </span>
                    <span className="text-xs sm:text-[13px] text-slate-500 font-medium block mt-2">
                      Deployment
                    </span>
                  </div>
                </div>
              </div>

            </div>

            
            <div className="lg:col-span-7">
              <div className="relative rounded-[22px] sm:rounded-[28px] overflow-hidden border-[6px] sm:border-[8px] border-[#0A1727] bg-[#0A1727] shadow-[0_20px_50px_-10px_rgba(10,23,39,0.25)]">
                
                <img
                  src={serviceImg}
                  alt="Bayina Executive Dashboard"
                  className="w-full h-auto object-cover block select-none"
                />

                
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-[#0A1727]/85 backdrop-blur-md rounded-[14px] sm:rounded-[16px] px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-3 border border-white/10 shadow-xl">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                    <span className="text-xs sm:text-[13px] text-slate-100 font-medium tracking-tight truncate">
                      Active Portfolio Pulse: Regional Operations
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-300 tracking-wider uppercase shrink-0">
                    BAYINA Telemetry Core
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
