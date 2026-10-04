import rectangle4Img from '../../assets/images/Rectangle 4.png';
import rectangle5Img from '../../assets/images/Rectangle 5.png';
import rectangleAboutImg from '../../assets/images/rectangleAbout.png';

export function AboutUsSection() {
  return (
    <section className="py-10 sm:py-14 lg:py-18">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-stretch">
          
          
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-[460px] sm:max-w-[500px] items-stretch">
              
              
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-sm bg-slate-100 aspect-[310/566]">
                <img
                  src={rectangle4Img}
                  alt="Market Vision"
                  className="w-full h-full object-cover rounded-[28px] sm:rounded-[32px] select-none hover:scale-102 transition-transform duration-500"
                />
              </div>

              
              <div className="flex flex-col gap-4 sm:gap-5 justify-between">
                
               
                <div className="relative w-full rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm aspect-[310/140] flex flex-col items-center justify-center text-center p-4 bg-[#104263]">
                  
                  <img
                    src={rectangleAboutImg}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
                  />
                  
                 
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <span className="font-headline font-bold text-2xl sm:text-3xl lg:text-[34px] text-white tracking-tight leading-none mb-1 sm:mb-1.5">
                      +2 Years
                    </span>
                    <span className="text-xs sm:text-sm text-slate-100 font-normal tracking-wide">
                      Experience
                    </span>
                  </div>
                </div>

                
                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-sm flex-1 bg-slate-100">
                  <img
                    src={rectangle5Img}
                    alt="Data Analytics and Inspection"
                    className="w-full h-full object-cover rounded-[28px] sm:rounded-[32px] select-none hover:scale-102 transition-transform duration-500"
                  />
                </div>

              </div>

            </div>
          </div>

         
          <div className="lg:col-span-6 flex flex-col justify-between self-stretch py-1 sm:py-2">
            <div>
             
              <h3 className="font-bold text-lg sm:text-xl text-[#104263] tracking-wide mb-8 sm:mb-10">
                WHO WE ARE
              </h3>

              
              <h2 className="font-bold text-xl sm:text-2xl lg:text-[23px] text-[#0A1727] tracking-tight leading-snug mb-6 sm:mb-8">
                A multidisciplinary practice built around business understanding.
              </h2>

              
              <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] leading-[1.68] max-w-[480px] font-normal mb-8 sm:mb-10">
                BAYINA operates at the intersection of financial understanding, analytical thinking, and business intelligence. We combine knowledge of financial performance with business data and reporting to look beyond individual numbers and create a clearer, more connected view of your business.
              </p>
            </div>

           
            <div>
              <a
                href="#services"
                className="group inline-flex items-center gap-3 bg-[#104263] hover:bg-[#0B3553] text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-md shadow-[#104263]/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer w-fit"
              >
                <span>Read More</span>
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
