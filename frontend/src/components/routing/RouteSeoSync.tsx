import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://www.bayina.org';

interface SeoMetadata {
  title: string;
  description: string;
  canonical: string;
}

const ROUTE_SEO: Record<string, SeoMetadata> = {
  '/': {
    title: 'BAYINA | Financial Advisory, Data Analytics & Business Intelligence',
    description: 'BAYINA helps organizations unlock clarity and performance through strategic financial advisory, advanced financial modeling, and executive business intelligence solutions.',
    canonical: `${BASE_URL}/`,
  },
  '/about': {
    title: 'About Us | BAYINA — Financial Advisory & Analytics Firm',
    description: 'Discover BAYINA: an advisory firm operating at the intersection of institutional finance and business intelligence, helping leadership teams turn data into decisive action.',
    canonical: `${BASE_URL}/about`,
  },
  '/services': {
    title: 'Advisory & Analytics Services | BAYINA',
    description: 'Explore BAYINA\'s institutional service portfolio: Strategic Financial Modeling, Enterprise Data Analytics, and Executive Business Intelligence Dashboards.',
    canonical: `${BASE_URL}/services`,
  },
  '/services/finance': {
    title: 'Financial Modeling & Strategic Advisory Services | BAYINA',
    description: 'Institutional financial statement analysis, dynamic 3-statement financial modeling, cash flow forecasting, and FP&A advisory engineered for leadership teams.',
    canonical: `${BASE_URL}/services/finance`,
  },
  '/services/analytics': {
    title: 'Enterprise Data Analytics & Warehousing Services | BAYINA',
    description: 'Transform raw enterprise data into operational insights across sales, customer retention, procurement, inventory, and workforce productivity.',
    canonical: `${BASE_URL}/services/analytics`,
  },
  '/services/bi': {
    title: 'Executive Business Intelligence & Power BI Solutions | BAYINA',
    description: 'Empower leadership with live Power BI executive dashboards, automated management reporting, KPI telemetry, and sub-second decision support.',
    canonical: `${BASE_URL}/services/bi`,
  },
  '/request': {
    title: 'Request a Consultation & Scope Your Project | BAYINA',
    description: 'Submit your business inquiry to BAYINA. Our senior partners will review your data sources, scope your advisory engagement, and respond within 24 hours.',
    canonical: `${BASE_URL}/request`,
  },
};

export function RouteSeoSync() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_SEO[pathname] || ROUTE_SEO['/'];

    // Update document title
    document.title = meta.title;

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', meta.canonical);

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description);
    }

    // Update Open Graph tags
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', meta.canonical);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', meta.description);
    }
  }, [pathname]);

  return null;
}
