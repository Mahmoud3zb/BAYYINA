import heroSampleImg from '../../assets/images/Hero (Sample).png';
import light1Img from '../../assets/images/Light 1.png';
import light2Img from '../../assets/images/Light 2.png';

export function DashboardPreview() {
  return (
    <div className="relative w-full">
      {/* Outer Ice-Blue Container Card */}
      <div className="relative bg-[#EBF2F8] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 lg:p-7 border border-slate-200/60 shadow-sm overflow-hidden">
        
        {/* Light 1 (Top-Right Ambient Glow - 420x420) */}
        <img
          src={light1Img}
          alt=""
          aria-hidden="true"
          className="absolute -top-12 -right-12 w-[300px] sm:w-[380px] lg:w-[420px] h-[300px] sm:h-[380px] lg:h-[420px] pointer-events-none select-none z-0 object-contain opacity-90"
        />

        {/* Light 2 (Bottom-Left Ambient Glow) */}
        <img
          src={light2Img}
          alt=""
          aria-hidden="true"
          className="absolute -bottom-40 -left-40 w-[260px] sm:w-[340px] lg:w-[380px] h-[260px] sm:h-[340px] lg:h-[380px] pointer-events-none select-none z-0 object-contain opacity-90"
        />

        {/* Inner Content Layer */}
        <div className="relative z-10">
          {/* Floating Top Badge (Sample Tag) */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-slate-200/70 shadow-sm text-xs font-semibold text-[#123C56] mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Sample dashboard preview</span>
          </div>

          {/* Laptop Mockup Wrapper */}
          <div className="relative">
            {/* Screen Bezel & Dashboard Image */}
            <div className="relative rounded-t-2xl sm:rounded-t-3xl overflow-hidden shadow-2xl border-[6px] sm:border-[8px] border-slate-900 bg-[#0B192C]">
              <img
                src={heroSampleImg}
                alt="BAYYINA Financial Overview Dashboard Preview"
                className="w-full h-auto object-cover block"
                loading="eager"
              />
            </div>

            {/* Laptop Base (Base Notch & Metallic Finish) */}
            <div className="relative w-[103%] -ml-[1.5%] h-3 sm:h-3.5 bg-gradient-to-b from-[#e2e8f0] to-[#cbd5e1] rounded-b-xl shadow-md border-t border-slate-300 flex items-center justify-center">
              {/* Base Notch */}
              <div className="w-14 sm:w-16 h-1 bg-slate-400/80 rounded-b-md -mt-1.5" />
            </div>

            {/* Soft Ambient Laptop Shadow */}
            <div className="w-[88%] h-3 bg-slate-800/15 blur-md rounded-full mx-auto -mt-1" />
          </div>
        </div>

        {/* Floating KPI: Net Profit Badge Card (Bottom Right Overlay) */}
        <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100/80 min-w-[200px] sm:min-w-[220px] transition-all duration-300 hover:shadow-emerald-900/10 hover:-translate-y-1">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
            Net Profit
          </span>
          <div className="font-headline text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            $1.9M
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="inline-flex items-center text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
              ▲ 12.4%
            </span>
            <span className="text-slate-400 font-medium">Sample data</span>
          </div>
        </div>

      </div>
    </div>
  );
}
