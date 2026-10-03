import type { FormData } from './types';

interface RequestSuccessCardProps {
  formData: FormData;
  onReset: () => void;
}

export function RequestSuccessCard({ formData, onReset }: RequestSuccessCardProps) {
  return (
    <div className="py-10 text-center max-w-xl mx-auto">
      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-100">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h3 className="font-headline font-bold text-2xl sm:text-3xl text-[#0A1727] tracking-tight mb-3">
        Request Received Successfully
      </h3>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
        Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Your request for <strong className="text-slate-800">{formData.companyName}</strong> ({formData.serviceArea}) has been recorded. Our senior advisory team will review your objectives and contact you within 1 business day at <strong className="text-slate-800">{formData.businessEmail}</strong>.
      </p>

      
      <div className="bg-[#F8FAFC] rounded-[20px] p-5 border border-slate-200/80 text-left mb-8 text-xs sm:text-sm space-y-2 text-slate-700">
        <div className="flex justify-between py-1 border-b border-slate-200/50">
          <span className="text-slate-400">Company:</span>
          <span className="font-semibold text-slate-900">{formData.companyName} ({formData.industry})</span>
        </div>
        <div className="flex justify-between py-1 border-b border-slate-200/50">
          <span className="text-slate-400">Service Focus:</span>
          <span className="font-semibold text-slate-900">{formData.serviceArea}</span>
        </div>
        <div className="flex justify-between py-1 border-b border-slate-200/50">
          <span className="text-slate-400">Data Sources:</span>
          <span className="font-semibold text-slate-900">{formData.dataSources.join(', ')}</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="text-slate-400">Target Outcome:</span>
          <span className="font-semibold text-slate-900">{formData.preferredOutcomes.join(', ')}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="bg-[#104263] hover:bg-[#0c334d] text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
      >
        Submit Another Request
      </button>
    </div>
  );
}
