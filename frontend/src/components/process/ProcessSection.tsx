interface ProcessStep {
  step: string;
  title: string;
  description: string;
  isAccent?: boolean;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Data Collection',
    description:
      'Gathering raw financial and operational records from ERP, databases, and spreadsheets.',
  },
  {
    step: '02',
    title: 'Data Preparation',
    description:
      'Cleansing, normalizing, and standardizing disparate sources into structured tables.',
  },
  {
    step: '03',
    title: 'Analysis',
    description:
      'Deep quantitative modeling, variance calculations, and KPI framework formulation.',
  },
  {
    step: '04',
    title: 'Dashboard Dev',
    description:
      'Building intuitive, automated, high-visibility dashboards for stakeholders.',
  },
  {
    step: '05',
    title: 'Decision Support',
    description:
      'Continuous executive reviews, scenario planning, and operational alignment.',
    isAccent: true,
  },
];

export function ProcessSection() {
  return (
    <section id="how-we-work" className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="bg-[#E5EEFF] rounded-[32px] sm:rounded-[40px] py-14 sm:py-20 px-6 sm:px-10 lg:px-14 border border-[#D0E0FA] shadow-sm relative overflow-hidden">
          
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#1E5BB8] uppercase block mb-3">
              How We Work
            </span>
            <h2 className="font-headline font-extrabold text-3xl sm:text-4xl lg:text-[48px] text-[#0B192C] tracking-tight leading-tight mb-4">
              From data to clear decisions.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              We turn business information into structured insight that helps organizations monitor performance and make informed decisions.
            </p>
          </div>

          
          <div className="relative">
           
            <div
              className="absolute top-6 left-[8%] right-[8%] h-[1.5px] bg-slate-300/80 hidden lg:block -z-0"
              aria-hidden="true"
            />

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
              {PROCESS_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-col items-center text-center group"
                >
                  
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm text-white transition-all duration-300 group-hover:scale-110 ${
                      item.isAccent
                        ? 'bg-[#1E5BB8] shadow-md shadow-blue-500/25 ring-4 ring-blue-100'
                        : 'bg-[#0E2F46] shadow-sm'
                    }`}
                  >
                    {item.step}
                  </div>

                  
                  <h3 className="font-headline font-bold text-base sm:text-lg text-[#0B192C] mt-6 mb-2">
                    {item.title}
                  </h3>

                  
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-xs sm:max-w-none">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
