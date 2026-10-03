export function WhyWeDoItSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-24 items-start">
          
          {/* Left Column: Number Badge + Eyebrow + Main Statement */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            {/* 01 Watermark Number */}
            <span className="font-headline font-bold text-6xl sm:text-7xl lg:text-[80px] text-[#E8F0F8] leading-none select-none tracking-tight -mb-1 block">
              01
            </span>

            {/* Eyebrow */}
            <span className="font-bold text-xs sm:text-[13px] uppercase tracking-[0.2em] text-[#1E5BB8] mb-5 sm:mb-6 block">
              WHY WE DO IT
            </span>

            {/* Headline */}
            <h2 className="font-headline font-semibold text-3xl sm:text-4xl lg:text-[42px] text-[#0B192C] tracking-tight leading-[1.22] max-w-lg">
              Information Only Matters <br className="hidden sm:block" />
              When It Leads to Action.
            </h2>
          </div>

          {/* Right Column: Paragraph + Highlighted Quote */}
          <div className="lg:col-span-6 flex flex-col justify-start pt-2 lg:pt-4">
            {/* Body Copy */}
            <div className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-[1.72] font-normal mb-8 sm:mb-9 max-w-lg space-y-4">
              <p>
                Organizations have more data than ever, yet many still struggle to see the full picture. Reports are disconnected. Metrics arrive too late. Decisions depend on manual work and partial views.
              </p>
              <p>
                Our purpose is simple: help organizations transform information into insight—and insight into action.
              </p>
            </div>

            {/* Quote Block with Blue Vertical Border */}
            <div className="border-l-[3px] border-[#1E5BB8] pl-5 sm:pl-6 py-1 max-w-lg">
              <blockquote className="font-headline font-bold text-xl sm:text-2xl text-[#0B192C] tracking-tight leading-snug">
                &ldquo;Clarity changes how a business moves.&rdquo;
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
