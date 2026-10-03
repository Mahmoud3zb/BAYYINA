export function RequestAssuranceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
      
      <div className="bg-[#EEF5FF] rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 border border-blue-100/60 shadow-xs">
        <div className="w-10 h-10 rounded-full bg-white text-[#104263] flex items-center justify-center mb-5 shadow-xs">
          <svg className="w-5 h-5 text-[#104263]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
          </svg>
        </div>
        <h4 className="font-headline font-bold text-lg sm:text-xl text-[#0A1727] tracking-tight mb-2">
          Rapid Evaluation
        </h4>
        <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal">
          Initial data audit architectures are structured and reviewed within 1 business day by senior regional partners.
        </p>
      </div>

      
      <div className="bg-[#EEF5FF] rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 border border-blue-100/60 shadow-xs">
        <div className="w-10 h-10 rounded-full bg-white text-[#104263] flex items-center justify-center mb-5 shadow-xs">
          <svg className="w-5 h-5 text-[#104263]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9.5" />
            <path d="m8.5 12.5 2.5 2.5 4.5-5" />
          </svg>
        </div>
        <h4 className="font-headline font-bold text-lg sm:text-xl text-[#0A1727] tracking-tight mb-2">
          Enterprise Governance
        </h4>
        <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal">
          All submitted telemetry and financial disclosures are encrypted under AES-256 protocols and governed by regional regulatory compliance.
        </p>
      </div>

      
      <div className="bg-[#EEF5FF] rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 border border-blue-100/60 shadow-xs">
        <div className="w-10 h-10 rounded-full bg-white text-[#104263] flex items-center justify-center mb-5 shadow-xs">
          <svg className="w-5 h-5 text-[#104263]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <circle cx="19" cy="6" r="2" />
            <circle cx="5" cy="6" r="2" />
            <circle cx="19" cy="18" r="2" />
            <circle cx="5" cy="18" r="2" />
            <line x1="12" y1="9" x2="12" y2="15" />
            <line x1="10" y1="10" x2="7" y2="7" />
            <line x1="14" y1="10" x2="17" y2="7" />
            <line x1="10" y1="14" x2="7" y2="17" />
            <line x1="14" y1="14" x2="17" y2="17" />
          </svg>
        </div>
        <h4 className="font-headline font-bold text-lg sm:text-xl text-[#0A1727] tracking-tight mb-2">
          Direct C-Suite Advisory
        </h4>
        <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal">
          Direct engagement with dedicated analytical directors with deep institutional fluency across financial landscapes.
        </p>
      </div>
    </div>
  );
}
