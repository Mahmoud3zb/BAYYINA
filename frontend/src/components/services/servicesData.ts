import eurIcon from '../../assets/icons/cryptocurrency-color_eur.svg';
import pieIcon from '../../assets/icons/fluent-color_data-pie-32.svg';
import biIcon from '../../assets/icons/thesvg-color_microsoft-dynamics-365-sales-insights.svg';

export interface Capability {
  id: string;
  name: string;
  description: string;
  whatItCreates: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  lensNumber: string;
  iconSrc: string;
  iconBg: string;
  lensDescription: string;
  capabilities: Capability[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
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
