import eurIcon from '../../assets/icons/cryptocurrency-color_eur.svg';
import salesIcon from '../../assets/icons/thesvg-color_microsoft-dynamics-365-sales-insights.svg';
import operationsIcon from '../../assets/icons/fluent-color_operations.svg';
import hrIcon from '../../assets/icons/fluent-color_people.svg';
import procurementIcon from '../../assets/icons/fluent-color_procurement.svg';
import powerBiIcon from '../../assets/icons/logos_microsoft-power-bi.svg';

interface Perspective {
  id: string;
  name: string;
  metrics: string[];
  iconSrc: string;
  iconBg: string;
}

const PERSPECTIVES: Perspective[] = [
  {
    id: 'finance',
    name: 'FINANCE',
    metrics: ['Profitability', 'Cash Flow', 'Margins', 'Financial Performance'],
    iconSrc: eurIcon,
    iconBg: 'bg-blue-50/70 border-blue-100/70',
  },
  {
    id: 'sales',
    name: 'SALES',
    metrics: ['Revenue', 'Customers', 'Targets', 'Growth', 'Pipeline'],
    iconSrc: salesIcon,
    iconBg: 'bg-emerald-50/70 border-emerald-100/70',
  },
  {
    id: 'operations',
    name: 'OPERATIONS',
    metrics: ['Productivity', 'Efficiency', 'Output', 'Performance'],
    iconSrc: operationsIcon,
    iconBg: 'bg-sky-50/70 border-sky-100/70',
  },
  {
    id: 'hr',
    name: 'HR',
    metrics: ['Headcount', 'Workforce', 'Attendance', 'Turnover'],
    iconSrc: hrIcon,
    iconBg: 'bg-indigo-50/70 border-indigo-100/70',
  },
  {
    id: 'procurement',
    name: 'PROCUREMENT',
    metrics: ['Spend', 'Suppliers', 'Purchasing', 'Cost Trends'],
    iconSrc: procurementIcon,
    iconBg: 'bg-amber-50/70 border-amber-100/70',
  },
  {
    id: 'management',
    name: 'MANAGEMENT',
    metrics: ['KPIs', 'Performance', 'Trends', 'Business Overview'],
    iconSrc: powerBiIcon,
    iconBg: 'bg-amber-50/70 border-amber-100/70',
  },
];

export function OneBusinessSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-28 relative border-y border-slate-200/50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
  
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.2em] text-[#1E5BB8] mb-3 block">
            MULTIPLE PERSPECTIVES
          </span>
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-[40px] text-[#0A1727] tracking-tight leading-tight uppercase mb-4">
            ONE BUSINESS. MULTIPLE PERSPECTIVES.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-2xl mx-auto font-normal">
            A business does not operate through one set of numbers. BAYINA connects these perspectives to create a more complete understanding of how the business is performing.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1240px] mx-auto">
          {PERSPECTIVES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[26px] p-7 sm:p-8 border border-slate-200/70 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`w-12 h-12 rounded-[16px] ${item.iconBg} border flex items-center justify-center p-2.5 group-hover:scale-110 transition-all duration-300 shadow-xs shrink-0`}>
                    <img src={item.iconSrc} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-[#0A1727] tracking-tight">
                    {item.name}
                  </h3>
                </div>

                  
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

                
                <div className="w-full h-1 bg-gradient-to-r from-[#1E5BB8]/0 via-[#1E5BB8]/30 to-[#1E5BB8]/0 rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
        </div>

        
        <div className="text-center mt-12 sm:mt-16">
          <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#104263] bg-white border border-slate-200/80 px-6 py-3 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#1E5BB8] animate-pulse" />
            BAYINA connects these perspectives to create a complete understanding of how the business is performing.
          </p>
        </div>
      </div>
    </section>
  );
}
