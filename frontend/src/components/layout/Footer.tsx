export function Footer() {
  return (
    <footer
      style={{ backgroundColor: '#104263' }}
      className="bg-[#104263] text-slate-300 pt-16 sm:pt-20 pb-12"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16">
          
          
          <div className="lg:col-span-4">
            <a href="#" className="inline-block group mb-4">
              <span className="block font-headline text-2xl sm:text-[30px] font-extrabold tracking-tight text-white transition-colors group-hover:text-slate-100">
                BAYINA
              </span>
              <span className="block text-[11px] font-bold tracking-[0.2em] text-[#BAC7E1] uppercase mt-2">
                WHERE FINANCE MEETS ANALYTICS
              </span>
            </a>
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
              {['Home', 'About', 'Services', 'Request Service'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-xs sm:text-[13px] text-[#8CA0B8] hover:text-white transition-colors"
                  >
                    {item}
                  </a>
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
                'Institutional Finance Modeling',
                'Data Analytics & Data Warehousing',
                'Executive Business Intelligence',
                'Strategic Financial Advisory',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-xs sm:text-[13px] text-[#8CA0B8] hover:text-white transition-colors"
                  >
                    {item}
                  </a>
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
                href="mailto:contact@bayina.analytics"
                className="text-xs sm:text-[13px] text-[#8CA0B8] hover:text-white transition-colors block mt-0.5"
              >
                contact@bayina.analytics
              </a>
            </div>

           
            <div className="mb-3.5">
              <span className="text-xs text-[#E3E9ED] block font-medium">Direct Line</span>
              <a
                href="tel:+97142308900"
                className="text-xs sm:text-[13px] text-[#8CA0B8] hover:text-white transition-colors block mt-0.5"
              >
                +971 4 230 8900
              </a>
            </div>

            
            <div className="mb-4">
              <span className="text-xs text-[#E3E9ED] block font-medium">Regional Presence</span>
              <span className="text-xs sm:text-[13px] text-[#8CA0B8] block mt-0.5">
                DIFC Dubai & KAFD Riyadh
              </span>
            </div>

            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs sm:text-[13px] text-[#BAC7E1] hover:text-white transition-colors font-medium group mt-1"
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
              <span>Connect With Partners</span>
            </a>
          </div>

        </div>

        
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
          </div>
        </div>
      </div>
    </footer>
  );
}
