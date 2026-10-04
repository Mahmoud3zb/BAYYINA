import image60 from '../../assets/images/image 60.png';
import diagramAboutImg from '../../assets/images/diagramAbout.png';
import shapeImg from '../../assets/images/shape.png';
import rectangleAboutImg from '../../assets/images/rectangleAbout.png';
import trendingUpIcon from '../../assets/icons/trending-up.svg';
import afterpayLogo from '../../assets/icons/Company logo.svg';
import basecampLogo from '../../assets/icons/Company logo-1.svg';
import mazeLogo from '../../assets/icons/Company logo-2.svg';

export function AboutHeroSection() {
  return (
    <section className="py-6 sm:py-8 lg:py-10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
       
        <div className="bg-[#FAFBFD] rounded-[28px] sm:rounded-[40px] p-5 sm:p-10 lg:p-16 border border-slate-200/70 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
           
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h1 className="font-headline font-extrabold text-4xl sm:text-5xl lg:text-[54px] text-[#0A1727] tracking-tight leading-[1.12] mb-6">
                  Clarity for Better <br />
                  Business Decisions
                </h1>
                <p className="text-slate-500 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-lg mb-8 font-normal">
                  At BAYINA, we believe that better business decisions begin with a clearer understanding of the information behind them—bringing together Finance, Data Analytics, and Business Intelligence.
                </p>

                
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-[#104263] hover:bg-[#0B3553] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#104263]/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer w-fit"
                >
                  <span>Call Now</span>
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

              
              <div className="mt-14 sm:mt-20 pt-2 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
                <span className="text-xs font-bold text-[#1E293B] leading-tight max-w-[130px]">
                  Trusted by the world&apos;s<br />biggest brands
                </span>
                <div className="flex items-center gap-6 sm:gap-8 opacity-80 hover:opacity-100 transition-opacity">
                  <img src={afterpayLogo} alt="Afterpay" className="h-5 sm:h-6 w-auto object-contain" />
                  <img src={basecampLogo} alt="Basecamp" className="h-5 sm:h-6 w-auto object-contain" />
                  <img src={mazeLogo} alt="Maze" className="h-5 sm:h-6 w-auto object-contain" />
                </div>
              </div>
            </div>

            
            <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
              
             
              
              <div className="grid grid-cols-2 gap-3.5 sm:gap-6 items-stretch">
                
                
                <div className="relative w-full flex items-end justify-start">
                  <div className="relative w-full aspect-[266/241] flex items-end">
                    <img
                      src={shapeImg}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain object-left-bottom select-none pointer-events-none drop-shadow-xs"
                    />
                    
                    
                    <div className="absolute -top-1 -right-1 sm:top-1 sm:right-2 lg:top-2 lg:right-3 w-10 h-10 sm:w-13 sm:h-13 lg:w-15 lg:h-15 rounded-full bg-[#103854] flex items-center justify-center shadow-xl border-2 border-white/20 transition-transform duration-200 hover:scale-110 z-20">
                      <img src={trendingUpIcon} alt="Trending" className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-contain" />
                    </div>
                  </div>
                </div>

               
                <div className="bg-[#F0F3F7] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 lg:p-7 shadow-xs border border-slate-200/50 flex flex-col justify-between transition-all duration-200 hover:shadow-md">
                  <div>
                    <h3 className="font-headline text-2xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0A1727] tracking-tight mb-1 sm:mb-2 leading-none">
                      20+
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium leading-relaxed mt-1 sm:mt-2">
                      some big companies that we work with, and trust us very much
                    </p>
                  </div>

                  <div className="w-full h-1.5 sm:h-2 bg-slate-200 rounded-full overflow-hidden mt-3 sm:mt-auto">
                    <div className="w-[72%] h-full bg-[#104263] rounded-full" />
                  </div>
                </div>

              </div>

              
              <div className="relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg aspect-[515/189] min-h-[175px] sm:min-h-[189px] flex items-center justify-between bg-[#104263]">
                
                <img
                  src={rectangleAboutImg}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none z-0"
                />

                
                <img
                  src={image60}
                  alt=""
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-full w-[55%] object-fill pointer-events-none select-none z-1"
                />

                
                <div className="relative z-10 pl-6 sm:pl-8 pr-4 py-5 sm:py-6 shrink-0">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                    <div className="w-7 sm:w-9 h-[1.5px] bg-slate-300/80 shrink-0" />
                    <span className="text-[11px] sm:text-xs lg:text-[13px] font-medium text-slate-100 whitespace-nowrap">
                      More data mean more success
                    </span>
                  </div>
                  <h4 className="font-headline font-bold text-lg sm:text-xl lg:text-[23px] text-white leading-[1.22] tracking-tight whitespace-nowrap">
                    Drive the data and<br />product sales
                  </h4>
                </div>

                
                <div className="relative z-10 h-full pr-5 sm:pr-7 lg:pr-8 shrink-0 flex items-end justify-end pb-3 sm:pb-3.5">
                  <img
                    src={diagramAboutImg}
                    alt="Product sales growth diagram"
                    className="h-[78%] sm:h-[82%] w-auto object-contain block drop-shadow-md"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
