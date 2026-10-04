import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICE_CATEGORIES } from './servicesData';

interface ChooseYourServicesSectionProps {
  categoryParam?: string;
  selectedCategoryId?: string;
  onCategoryChange?: (categoryId: string) => void;
}

const resolveCategoryId = (param?: string): string => {
  if (!param) return 'finance';
  const clean = param.toLowerCase().trim();
  if (clean.includes('analytics')) return 'analytics';
  if (clean.includes('bi') || clean.includes('intelligence')) return 'bi';
  return 'finance';
};

export function ChooseYourServicesSection({
  categoryParam,
  selectedCategoryId,
  onCategoryChange,
}: ChooseYourServicesSectionProps = {}) {
  const navigate = useNavigate();
  const effectiveCategory = resolveCategoryId(categoryParam || selectedCategoryId);

  const [activeCategoryId, setActiveCategoryId] = useState<string>(effectiveCategory);
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState<number>(0);

  useEffect(() => {
    const target = resolveCategoryId(categoryParam || selectedCategoryId);
    setActiveCategoryId(target);
    setActiveCapabilityIndex(0);

    
    if (categoryParam) {
      setTimeout(() => {
        const el = document.getElementById('choose-your-services');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [categoryParam, selectedCategoryId]);

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeCategoryId) || SERVICE_CATEGORIES[0];
  const activeCapability = activeCategory.capabilities[activeCapabilityIndex] || activeCategory.capabilities[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setActiveCapabilityIndex(0);
    onCategoryChange?.(categoryId);
    navigate(`/services/${categoryId}`, { replace: true });
  };

  return (
    <section id="choose-your-services" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#0A1727] tracking-tight leading-tight uppercase mb-3">
            CHOOSE <br />
            YOUR Services
          </h2>
          <p className="text-slate-500 sm:text-slate-600 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-2xl font-normal">
            Explore solutions designed to help you understand, monitor, improve, and manage your business performance with institutional precision.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {SERVICE_CATEGORIES.map((category) => {
            const isSelected = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                className={`text-left p-6 sm:p-7 rounded-[24px] sm:rounded-[28px] transition-all duration-300 flex items-center justify-between cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-[#1E5BB8]/40 shadow-[0_12px_35px_-8px_rgba(30,91,184,0.18)] ring-2 ring-[#1E5BB8]/15 -translate-y-1'
                    : 'bg-white/80 hover:bg-white border-slate-200/70 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-[#0A1727] tracking-tight mb-1">
                    {category.title}
                  </h3>
                  <span className="text-xs sm:text-[13px] font-medium text-slate-500 block">
                    {category.capabilities.length} Capabilities
                  </span>
                </div>

                <div className={`w-11 h-11 flex items-center justify-center shrink-0 transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
                  <img src={category.iconSrc} alt={category.title} className="w-9 h-9 object-contain" />
                </div>
              </button>
            );
          })}
        </div>

        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-8 border-b border-slate-200/60">
          <div>
            <span className="font-headline font-bold text-xs sm:text-[12px] uppercase tracking-[0.2em] text-[#1E5BB8] mb-2 block">
              SELECTED LENS / {activeCategory.lensNumber}
            </span>
            <h3 className="font-headline font-bold text-3xl sm:text-4xl text-[#0A1727] tracking-tight">
              {activeCategory.title}
            </h3>
          </div>


          <p className="text-slate-500 sm:text-slate-600 text-sm sm:text-[15px] max-w-md font-normal leading-relaxed md:text-right">
            {activeCategory.lensDescription}
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          
          <div className="lg:col-span-5 bg-white/70 rounded-[28px] p-4 sm:p-5 border border-slate-200/70 shadow-xs">
            
            <div className="flex items-center justify-between px-3 py-2 mb-3 border-b border-slate-200/50">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E5BB8]">
                CAPABILITY INDEX
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {String(activeCategory.capabilities.length).padStart(2, '0')} services
              </span>
            </div>

            
            <div className="flex flex-col gap-2">
              {activeCategory.capabilities.map((cap, idx) => {
                const isActive = idx === activeCapabilityIndex;
                const formattedNum = String(idx + 1).padStart(2, '0');
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setActiveCapabilityIndex(idx)}
                    className={`w-full text-left rounded-[16px] px-4 sm:px-5 py-3.5 transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-[#104263] text-white shadow-md shadow-[#104263]/20'
                        : 'text-slate-700 hover:text-[#104263] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0 pr-2">
                      <span className={`text-xs font-mono font-medium ${isActive ? 'text-blue-200' : 'text-slate-400 group-hover:text-[#104263]'}`}>
                        {formattedNum}
                      </span>
                      <span className={`text-sm sm:text-[14.5px] font-semibold tracking-tight truncate ${isActive ? 'text-white' : 'text-slate-700 group-hover:text-[#104263]'}`}>
                        {cap.name}
                      </span>
                    </div>

                    <svg
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isActive
                          ? 'text-[#38BDF8] translate-x-1'
                          : 'text-slate-300 group-hover:text-[#104263] group-hover:translate-x-1'
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>

          
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.06)] flex flex-col justify-between min-h-[460px] relative overflow-hidden">
              
              
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E5BB8]">
                  ACTIVE CAPABILITY
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400">
                  {String(activeCapabilityIndex + 1).padStart(2, '0')}/{String(activeCategory.capabilities.length).padStart(2, '0')}
                </span>
              </div>

              
              <div>
                
                <div className={`w-14 h-14 rounded-[18px] ${activeCategory.iconBg} flex items-center justify-center mb-6 shadow-xs`}>
                  <img src={activeCategory.iconSrc} alt="" className="w-8 h-8 object-contain" />
                </div>

                
                <h4 className="font-headline font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#0A1727] tracking-tight leading-snug mb-4">
                  {activeCapability.name}
                </h4>

                
                <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal mb-8">
                  {activeCapability.description}
                </p>
              </div>

              
              <div className="pt-6 border-t border-slate-200/60 mt-auto">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E5BB8] mb-2 block">
                    WHAT THIS CREATES
                  </span>
                  <div className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {activeCapability.whatItCreates}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
