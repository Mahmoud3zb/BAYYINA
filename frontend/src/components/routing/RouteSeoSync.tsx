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
    title: 'BAYINA | Financial Advisory & Business Intelligence',
    description: 'BAYINA provides financial advisory, data analytics, and business intelligence solutions to help businesses make better decisions and grow.',
    canonical: `${BASE_URL}/`,
  },
  '/about': {
    title: 'About Us | BAYINA — Financial Advisory & Analytics',
    description: 'Learn about BAYINA, our mission, values, and senior advisory team helping organizations unlock performance through finance and data intelligence.',
    canonical: `${BASE_URL}/about`,
  },
  '/services': {
    title: 'Services | BAYINA — Financial Modeling, Analytics & BI',
    description: 'Explore BAYINA institutional services: Strategic Financial Advisory, Data Analytics & Warehousing, and Executive Business Intelligence.',
    canonical: `${BASE_URL}/services`,
  },
  '/services/finance': {
    title: 'Strategic Financial Advisory & Modeling | BAYINA',
    description: 'Institutional financial statement analysis, FP&A, liquidity forecasting, and financial modeling shaped for executive decision-making.',
    canonical: `${BASE_URL}/services/finance`,
  },
  '/services/analytics': {
    title: 'Data Analytics & Warehousing | BAYINA',
    description: 'Transform enterprise data into operational insights across sales, customer lifetime value, inventory, procurement, and operations.',
    canonical: `${BASE_URL}/services/analytics`,
  },
  '/services/bi': {
    title: 'Executive Business Intelligence | BAYINA',
    description: 'Consolidated executive dashboards, KPI telemetry, and automated management reporting providing real-time visibility across departments.',
    canonical: `${BASE_URL}/services/bi`,
  },
  '/request': {
    title: 'Request a Service & Consultation | BAYINA',
    description: 'Connect with BAYINA partners to scope your engagement in financial advisory, data analytics, or business intelligence.',
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
