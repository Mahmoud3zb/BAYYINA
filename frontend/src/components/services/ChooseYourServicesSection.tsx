import { useState } from 'react';
import eurIcon from '../../assets/icons/cryptocurrency-color_eur.svg';
import pieIcon from '../../assets/icons/fluent-color_data-pie-32.svg';
import biIcon from '../../assets/icons/thesvg-color_microsoft-dynamics-365-sales-insights.svg';

interface Capability {
  id: string;
  name: string;
  description: string;
  whatItCreates: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  lensNumber: string;
  iconSrc: string;
  iconBg: string;
  lensDescription: string;
  capabilities: Capability[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'finance',
    title: 'Finance',
    lensNumber: '01',
    iconSrc: eurIcon,
    iconBg: 'bg-[#EEF5FF]',
    lensDescription: 'Build a trusted financial view that connects reporting, planning, cash, and profitability.',
    capabilities: [
      {
        id: 'fin-1',
        name: 'Financial Statement Analysis',
        description: 'Analyze the Income Statement, Balance Sheet, and Cash Flow Statement to understand financial performance, financial position, trends, and key movements.',
        whatItCreates: 'A clearer, decision-ready view shaped around your goals, data, and operating context.',
      },
      {
        id: 'fin-2',
        name: 'Management Reporting',
        description: 'Transform financial and operational information into structured management reports built around the KPIs and information management needs.',
        whatItCreates: 'Timely, consistent management reports that give leadership complete clarity over operational results.',
      },
      {
        id: 'fin-3',
        name: 'FP&A',
        description: 'Support budgeting, forecasting, variance analysis, financial planning, and performance management through a structured FP&A framework.',
        whatItCreates: 'Dynamic forecasting and variance detection that empowers forward-looking financial decisions.',
      },
      {
        id: 'fin-4',
        name: 'Cash Flow Intelligence',
        description: 'Understand cash movements, liquidity, working capital, receivables, payables, and the factors affecting cash availability.',
        whatItCreates: 'Predictable liquidity forecasting, optimized working capital, and elimination of cash blind spots.',
      },
      {
        id: 'fin-5',
        name: 'Profitability Analysis',
        description: 'Analyze profitability across products, customers, business units, projects, or other relevant dimensions to understand where value is being created.',
        whatItCreates: 'Granular visibility into true unit economics, high-yield customers, and margin leakages.',
      },
      {
        id: 'fin-6',
        name: 'Financial Modeling',
        description: 'Build structured financial models for planning, forecasting, scenario analysis, evaluation, and business decision-making.',
        whatItCreates: 'Institutional-grade mathematical models built for sensitivity testing and strategic capital planning.',
      },
    ],
  },
  {
    id: 'analytics',
    title: 'Data Analytics',
    lensNumber: '02',
    iconSrc: pieIcon,
    iconBg: 'bg-[#F5EEFF]',
    lensDescription: 'Turn business data into meaningful insight across departments, systems, and operational processes.',
    capabilities: [
      {
        id: 'da-1',
        name: 'Sales Analytics',
        description: 'Understand revenue, customers, products, targets, growth, sales performance, and commercial trends.',
        whatItCreates: 'Actionable sales pipeline visibility and clear attribution of revenue drivers.',
      },
      {
        id: 'da-2',
        name: 'Customer Analytics',
        description: 'Analyze customer behavior, segmentation, retention, contribution, and lifetime value.',
        whatItCreates: 'Deep customer cohort segmentation and proactive churn mitigation indicators.',
      },
      {
        id: 'da-3',
        name: 'Inventory Analytics',
        description: 'Monitor inventory levels, movement, turnover, aging, and working-capital impact.',
        whatItCreates: 'Optimized stock velocity, reduced holding costs, and early dead-stock warnings.',
      },
      {
        id: 'da-4',
        name: 'Procurement Analytics',
        description: 'Analyze purchasing activity, supplier performance, spend, prices, and purchasing trends.',
        whatItCreates: 'Vendor benchmarking, price variance tracking, and strategic procurement savings.',
      },
      {
        id: 'da-5',
        name: 'HR Analytics',
        description: 'Understand workforce structure, headcount, attendance, turnover, payroll, and workforce KPIs.',
        whatItCreates: 'Data-driven talent retention insight and balanced workforce productivity metrics.',
      },
      {
        id: 'da-6',
        name: 'Marketing Analytics',
        description: 'Measure campaigns, channels, customer acquisition, engagement, and marketing performance.',
        whatItCreates: 'Clear customer acquisition cost (CAC) tracking and high-performing channel attribution.',
      },
      {
        id: 'da-7',
        name: 'Operations Analytics',
        description: 'Analyze productivity, efficiency, processes, output, utilization, and operational performance.',
        whatItCreates: 'Bottleneck elimination and continuous operational throughput optimization.',
      },
      {
        id: 'da-8',
        name: 'Expense Analytics',
        description: 'Identify spending patterns, cost drivers, trends, and opportunities for better cost visibility.',
        whatItCreates: 'Total visibility into overhead drivers and recurring expenditure optimization.',
      },
      {
        id: 'da-9',
        name: 'Production Analytics',
        description: 'Monitor production output, efficiency, downtime, utilization, and manufacturing performance.',
        whatItCreates: 'Real-time equipment effectiveness (OEE) tracking and minimized operational downtime.',
      },
    ],
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    lensNumber: '03',
    iconSrc: biIcon,
    iconBg: 'bg-[#E8F8F0]',
    lensDescription: 'Give every part of the business a clearer, live view of performance across executive and departmental levels.',
    capabilities: [
      {
        id: 'bi-1',
        name: 'Executive Intelligence',
        description: 'A consolidated view of the metrics management needs to understand the overall business: Revenue · Profitability · Cash · Growth · KPIs · Performance.',
        whatItCreates: 'A unified single source of truth for the board and executive leadership.',
      },
      {
        id: 'bi-2',
        name: 'Department Intelligence',
        description: 'Dedicated intelligence environments designed around the specific needs of individual functions: Finance · Sales · Operations · HR · Procurement.',
        whatItCreates: 'Empowered department heads with localized, operational command telemetry.',
      },
      {
        id: 'bi-3',
        name: 'Live Business Dashboards',
        description: 'Interactive dashboards that bring relevant financial and operational information together in one clear view.',
        whatItCreates: 'Self-serve interactive reporting with zero latency in daily business monitoring.',
      },
      {
        id: 'bi-4',
        name: 'KPI & Performance Intelligence',
        description: 'Define, structure, and monitor the indicators that matter most to institutional business performance.',
        whatItCreates: 'Strategic alignment between organizational targets and operational execution.',
      },
      {
        id: 'bi-5',
        name: 'Management Reporting Automation',
        description: 'Reduce repetitive manual reporting and create more consistent, structured, and timely management information.',
        whatItCreates: 'Significant hours saved each month with error-free automated reporting cycles.',
      },
      {
        id: 'bi-6',
        name: 'Business Performance Intelligence',
        description: 'Connect financial and operational perspectives to provide a broader understanding of what is happening across the organization.',
        whatItCreates: 'Cross-functional correlation between operational actions and bottom-line financial health.',
      },
      {
        id: 'bi-7',
        name: 'Decision Support',
        description: 'Turn business information into structured insight that supports management review, planning, and informed decision-making.',
        whatItCreates: 'Actionable executive memos and predictive insights that de-risk strategic pivots.',
      },
    ],
  },
];

export function ChooseYourServicesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('finance');
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState<number>(0);

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeCategoryId) || SERVICE_CATEGORIES[0];
  const activeCapability = activeCategory.capabilities[activeCapabilityIndex] || activeCategory.capabilities[0];

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setActiveCapabilityIndex(0);
  };

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#0A1727] tracking-tight leading-tight uppercase mb-3">
            CHOOSE <br />
            YOUR Services
          </h2>
          <p className="text-slate-500 sm:text-slate-600 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-2xl font-normal">
            Explore solutions designed to help you understand, monitor, improve, and manage your business performance with institutional precision.
          </p>
        </div>

        {/* 3 Main Category Cards */}
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

        {/* Sub-header Bar: SELECTED LENS / 01 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-8 border-b border-slate-200/60">
          <div>
            <span className="font-headline font-bold text-xs sm:text-[12px] uppercase tracking-[0.2em] text-[#1E5BB8] mb-2 block">
              SELECTED LENS / {activeCategory.lensNumber}
            </span>
            <h3 className="font-headline font-bold text-3xl sm:text-4xl text-[#0A1727] tracking-tight">
              {activeCategory.title}
            </h3>
          </div>

          {/* Floating Accent Category Icon matching Figma */}
          <div className="hidden md:flex items-center justify-center">
            <img src={activeCategory.iconSrc} alt="" className="w-7 h-7 object-contain opacity-90" />
          </div>

          <p className="text-slate-500 sm:text-slate-600 text-sm sm:text-[15px] max-w-md font-normal leading-relaxed md:text-right">
            {activeCategory.lensDescription}
          </p>
        </div>

        {/* Capabilities Split Layout (Index on Left, Active Detail on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Capability Index List */}
          <div className="lg:col-span-5 bg-white/70 rounded-[28px] p-4 sm:p-5 border border-slate-200/70 shadow-xs">
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2 mb-3 border-b border-slate-200/50">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E5BB8]">
                CAPABILITY INDEX
              </span>
              <span className="text-xs font-semibold text-slate-400">
                {String(activeCategory.capabilities.length).padStart(2, '0')} services
              </span>
            </div>

            {/* List */}
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

          {/* Right Column: Active Capability Display Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.06)] flex flex-col justify-between min-h-[460px] relative overflow-hidden">
              
              {/* Top Row: ACTIVE CAPABILITY & Counter */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E5BB8]">
                  ACTIVE CAPABILITY
                </span>
                <span className="text-xs font-mono font-semibold text-slate-400">
                  {String(activeCapabilityIndex + 1).padStart(2, '0')}/{String(activeCategory.capabilities.length).padStart(2, '0')}
                </span>
              </div>

              {/* Main Content Area */}
              <div>
                {/* Category Squircle Icon Badge */}
                <div className={`w-14 h-14 rounded-[18px] ${activeCategory.iconBg} flex items-center justify-center mb-6 shadow-xs`}>
                  <img src={activeCategory.iconSrc} alt="" className="w-8 h-8 object-contain" />
                </div>

                {/* Capability Title */}
                <h4 className="font-headline font-bold text-2xl sm:text-3xl lg:text-[34px] text-[#0A1727] tracking-tight leading-snug mb-4">
                  {activeCapability.name}
                </h4>

                {/* Capability Description */}
                <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal mb-8">
                  {activeCapability.description}
                </p>
              </div>

              {/* Bottom What This Creates */}
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
