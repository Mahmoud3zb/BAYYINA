// Destination configuration for serverless submissions
export const SERVICE_REQUEST_CONFIG = {
  // Destination email for incoming service requests
  recipientEmail: 'mahmoudazaab034@gmail.com',
  // Direct zero-backend email delivery endpoint
  endpoint: 'https://formsubmit.co/ajax/mahmoudazaab034@gmail.com',
};

export interface FormData {
  fullName: string;
  jobTitle: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  industry: string;
  companySize: string;
  serviceArea: string;
  dataSources: string[];
  needDescription: string;
  preferredOutcomes: string[];
}

export interface ProcessStep {
  id: number;
  name: string;
  subtext: string;
  startText: string;
}

export const STEPS: ProcessStep[] = [
  { id: 1, name: 'About You', subtext: 'Primary point of contact', startText: 'Start with your contact details' },
  { id: 2, name: 'About Your Business', subtext: 'Entity & operating scope', startText: 'Tell us about your organization' },
  { id: 3, name: 'What Do You Need?', subtext: 'Advisory specialization', startText: 'Select your primary focus area' },
  { id: 4, name: 'Your Data', subtext: 'Sources & ledger integrity', startText: 'Select all sources you currently use' },
  { id: 5, name: 'Tell Us About Your Need', subtext: 'Core business objective', startText: 'Describe your core challenges and goals' },
  { id: 6, name: 'Preferred Outcome', subtext: 'Target deliverable archetype', startText: 'Choose the deliverable format you envision' },
];

export const COMPANY_SIZES = ['1–10', '11–50', '51–200', '201–500', '500+'];

export const SERVICE_AREAS = [
  { id: 'finance', title: 'Finance', description: 'Financial statement analysis, cash flow, financial modeling, and FP&A.' },
  { id: 'analytics', title: 'Data Analytics', description: 'Sales, operations, inventory, customer, marketing, and expense analytics.' },
  { id: 'bi', title: 'Business Intelligence', description: 'Interactive dashboards, automated reporting, and executive views.' },
];

export const DATA_SOURCES = [
  'Excel',
  'Financial Statements',
  'Trial Balance',
  'ERP',
  'Accounting Software',
  'CRM',
  'SQL Database',
  'Multiple Sources',
  'Not Sure',
  'Other',
];

export const PREFERRED_OUTCOMES = [
  'Analysis',
  'Report',
  'Dashboard',
  'Automated Reporting',
  'Financial Model',
  'Not Sure',
];
