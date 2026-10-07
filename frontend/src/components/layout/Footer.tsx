import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#104263' }}
      className="bg-[#104263] text-slate-300 pt-16 sm:pt-20 pb-12"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16">
          
          
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block group mb-4">
              <span className="block font-headline text-2xl sm:text-[30px] font-extrabold tracking-tight text-white transition-colors group-hover:text-slate-100">
                BAYINA
              </span>
              <span className="block text-[11px] font-bold tracking-[0.2em] text-[#BAC7E1] uppercase mt-2">
                WHERE FINANCE MEETS ANALYTICS
              </span>
            </Link>
            <p className="text-xs sm:text-[13px] text-[#8CA0B8] leading-relaxed max-w-sm mb-6">
              BAYINA helps organizations turn financial and business data into meaningful insights and decision-ready intelligence.
            </p>

            
            <div className="flex items-center gap-2.5">
              <span className="bg-[#235372] text-[#BAC7E1] text-xs px-3.5 py-1 rounded-full font-medium shadow-sm">
                Egypt
              </span>
              <span className="bg-[#235372] text-[#BAC7E1] text-xs px-3.5 py-1 rounded-full font-medium shadow-sm">
                Luxor
              </span>
            </div>
          </div>

          
          <div className="lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4 sm:mb-5">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Request Service', path: '/request' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-xs sm:text-[13px] text-[#8CA0B8] hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4 sm:mb-5">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Institutional Finance Modeling', path: '/services/finance' },
                { label: 'Data Analytics & Data Warehousing', path: '/services/analytics' },
                { label: 'Executive Business Intelligence', path: '/services/bi' },
                { label: 'Strategic Financial Advisory', path: '/services/finance' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-xs sm:text-[13px] text-[#8CA0B8] hover:text-white transition-colors cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4 sm:mb-5">
              CONTACT & LOCATIONS
            </h4>

            
            <div className="mb-3.5">
              <span className="text-xs text-[#E3E9ED] block font-medium">Direct Email</span>
              <a
                href="mailto:bayina.advisory@gmail.com"
                className="text-xs sm:text-[13px] text-[#8CA0B8] hover:text-white transition-colors block mt-0.5"
              >
                bayina.advisory@gmail.com
              </a>
            </div>

           
            <div className="mb-3.5">
              <span className="text-xs text-[#E3E9ED] block font-medium">Direct Line</span>
              <a
                href="tel:+201145600171"
                className="text-xs sm:text-[13px] text-[#8CA0B8] hover:text-white transition-colors block mt-0.5"
              >
                +201145600171
              </a>
            </div>

            
            {/* Regional Presence */}
            <div className="mb-3.5">
              <span className="text-xs text-[#E3E9ED] block font-medium">Regional Presence</span>
              <span className="text-xs sm:text-[13px] text-[#8CA0B8] block mt-0.5">
                Middle East
              </span>
            </div>

            {/* LinkedIn */}
            <div className="mb-4">
              <span className="text-xs text-[#E3E9ED] block font-medium">LinkedIn</span>
              <a
                href="https://www.linkedin.com/company/bayina/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-[#8CA0B8] hover:text-white transition-colors mt-1 group"
              >
                <svg
                  className="w-4 h-4 text-[#0A66C2] group-hover:scale-110 transition-transform shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="group-hover:underline">linkedin.com/company/bayina</span>
              </a>
            </div>

            {/* Direct Connect Action */}
            <div className="pt-1">
              <a
                href="mailto:bayina.advisory@gmail.com"
                className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-[#BAC7E1] hover:text-white transition-colors font-medium group"
              >
                <svg
                  className="w-4 h-4 text-[#BAC7E1] group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Connect with Partners</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-[#7B8FA6]">
          <p>© BAYINA. All Rights Reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#governance" className="hover:text-white transition-colors">
              Governance
            </a>
            <a
              href="https://www.linkedin.com/company/bayina/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BAYINA LinkedIn Profile"
              className="text-[#7B8FA6] hover:text-[#0A66C2] transition-colors inline-flex items-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
