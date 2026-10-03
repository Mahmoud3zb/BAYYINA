export function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-36 text-center"
      style={{
        background: 'radial-gradient(ellipse 90% 80% at 50% 40%, #154D77 0%, #0D3656 45%, #072238 80%, #041422 100%)',
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          
          <span className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.22em] text-[#38BDF8] mb-4 sm:mb-5 block">
            OUR SERVICES
          </span>

          
          <h1 className="font-headline font-bold text-3xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.16] mb-5 sm:mb-6">
            Intelligence Built Around Your Business.
          </h1>

          
          <p className="text-slate-300 text-sm sm:text-base lg:text-[18px] leading-relaxed max-w-2xl mx-auto font-normal">
            Explore solutions designed to help you understand, monitor, improve, and manage your business performance.
          </p>
        </div>
      </div>
    </section>
  );
}
