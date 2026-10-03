import overlayBlurImg from '../../assets/images/Overlay+Blur.png';

export function CtaSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
       
        <div className="relative bg-[#104263] bg-gradient-to-r from-[#104263] via-[#0E3957] to-[#104263] rounded-[32px] sm:rounded-[40px] py-12 sm:py-16 px-8 sm:px-12 lg:px-16 shadow-[0_25px_60px_-15px_rgba(16,66,99,0.35)] overflow-hidden">
          
          <img
            src={overlayBlurImg}
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-10 lg:translate-x-0 lg:left-[50%] w-[272px] h-[256px] pointer-events-none select-none object-contain z-0"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            
            <div className="max-w-2xl">
              <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-[1.18] mb-4">
                READY TO SEE YOUR BUSINESS <br className="hidden sm:inline" />
                MORE CLEARLY?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-xl">
                Tell us what you are trying to understand, improve, monitor, or solve. Our senior team is ready to scope your engagement.
              </p>
            </div>

           
            <div className="shrink-0">
              <a
                href="#request"
                className="group inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#104263] font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-black/15 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Request a Service</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 10H16M16 10L10.5 4.5M16 10L10.5 15.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
