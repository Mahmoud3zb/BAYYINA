import excelIcon from '../../assets/icons/selfhst_microsoft-excel-2018.svg';
import powerQueryIcon from '../../assets/icons/logos_react-query-icon.svg';
import powerPivotIcon from '../../assets/icons/thesvg-color_axis-bank.svg';
import powerBiIcon from '../../assets/icons/logos_microsoft-power-bi.svg';
import mysqlIcon from '../../assets/icons/logos_mysql.svg';
import pythonIcon from '../../assets/icons/logos_python.svg';

interface TechItem {
  icon: string;
  badge: string;
  badgeStyle: string;
  title: string;
  description: string;
}

const TECH_ITEMS: TechItem[] = [
  {
    icon: excelIcon,
    badge: 'CORE MODELING',
    badgeStyle: 'bg-[#ECFDF5] text-[#059669]',
    title: 'Microsoft Excel',
    description: 'Advanced Financial Models & Institutional Templates engineered for C-suite audit compliance.',
  },
  {
    icon: powerQueryIcon,
    badge: 'ETL AUTOMATION',
    badgeStyle: 'bg-[#F0FDFA] text-[#0D9488]',
    title: 'Power Query',
    description: 'Automated ETL pipelines, data cleansing formulas, and multi-source connection orchestration.',
  },
  {
    icon: powerPivotIcon,
    badge: 'DAX ENGINE',
    badgeStyle: 'bg-[#EEF2FF] text-[#4F46E5]',
    title: 'Power Pivot',
    description: 'High-performance DAX measures, in-memory tabular databases, and multi-entity relationship mapping.',
  },
  {
    icon: powerBiIcon,
    badge: 'ENTERPRISE BI',
    badgeStyle: 'bg-[#FFFBEB] text-[#D97706]',
    title: 'Microsoft Power BI',
    description: 'Enterprise Interactive Dashboards with row-level security, tenant federation, and instant reporting.',
  },
  {
    icon: mysqlIcon,
    badge: 'DATA WAREHOUSE',
    badgeStyle: 'bg-[#EFF6FF] text-[#2563EB]',
    title: 'Structured Query (SQL)',
    description: 'Robust warehousing schemas, indexed relational views, and sub-second analytical execution queries.',
  },
  {
    icon: pythonIcon,
    badge: 'ADVANCED MODELS',
    badgeStyle: 'bg-[#F0F9FF] text-[#0284C7]',
    title: 'Python & Pandas',
    description: 'Statistical regression models, probabilistic forecasting, automated reconciliations, and pipeline',
  },
];

export function TechnologySection() {
  return (
    <section id="technology" className="relative py-20 md:py-28 overflow-hidden bg-[#F4F7FA]">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px]  rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#1E5BB8] uppercase block mb-3">
            Technology
          </span>
          <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-[#0B192C] tracking-tight leading-tight mb-4">
            Technology That Enables <br className="hidden sm:inline" />
            Results
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            We work with industry-leading tools to turn raw information into meaningful insights.
          </p>
        </div>

        {/* 6 Technology Cards Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TECH_ITEMS.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 flex flex-col justify-between shadow-xl shadow-sky-950/5 border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-900/10"
            >
              {/* Top Row: Icon & Category Badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-11 h-11 flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span
                  className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md ${item.badgeStyle}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-headline font-bold text-lg sm:text-xl text-[#0B192C] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
