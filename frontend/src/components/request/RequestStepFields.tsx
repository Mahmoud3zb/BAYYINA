import type { FormData } from './types';
import { COMPANY_SIZES, SERVICE_AREAS, DATA_SOURCES, PREFERRED_OUTCOMES } from './types';

interface RequestStepFieldsProps {
  currentStep: number;
  formData: FormData;
  errors: Record<string, string>;
  onUpdateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  onToggleDataSource: (source: string) => void;
  onToggleOutcome: (outcome: string) => void;
}

export function RequestStepFields({
  currentStep,
  formData,
  errors,
  onUpdateField,
  onToggleDataSource,
  onToggleOutcome,
}: RequestStepFieldsProps) {
  return (
    <div>
      
      {currentStep === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => onUpdateField('fullName', e.target.value)}
              placeholder="Your Full Name"
              className={`w-full bg-[#F8FAFC] border rounded-[14px] px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? 'border-red-400 focus:ring-red-400/20 bg-red-50/10'
                  : 'border-slate-200/80 focus:ring-[#1E5BB8]/30 focus:border-[#1E5BB8]'
              }`}
            />
            {errors.fullName && (
              <span className="text-xs text-red-500 font-medium mt-1.5 block">
                {errors.fullName}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.jobTitle}
              onChange={(e) => onUpdateField('jobTitle', e.target.value)}
              placeholder="e.g. Finance Director, CFO"
              className={`w-full bg-[#F8FAFC] border rounded-[14px] px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.jobTitle
                  ? 'border-red-400 focus:ring-red-400/20 bg-red-50/10'
                  : 'border-slate-200/80 focus:ring-[#1E5BB8]/30 focus:border-[#1E5BB8]'
              }`}
            />
            {errors.jobTitle && (
              <span className="text-xs text-red-500 font-medium mt-1.5 block">
                {errors.jobTitle}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.businessEmail}
              onChange={(e) => onUpdateField('businessEmail', e.target.value)}
              placeholder="name@company.com"
              className={`w-full bg-[#F8FAFC] border rounded-[14px] px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.businessEmail
                  ? 'border-red-400 focus:ring-red-400/20 bg-red-50/10'
                  : 'border-slate-200/80 focus:ring-[#1E5BB8]/30 focus:border-[#1E5BB8]'
              }`}
            />
            {errors.businessEmail && (
              <span className="text-xs text-red-500 font-medium mt-1.5 block">
                {errors.businessEmail}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => onUpdateField('phoneNumber', e.target.value)}
              placeholder="+20 123 456 7890"
              className={`w-full bg-[#F8FAFC] border rounded-[14px] px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.phoneNumber
                  ? 'border-red-400 focus:ring-red-400/20 bg-red-50/10'
                  : 'border-slate-200/80 focus:ring-[#1E5BB8]/30 focus:border-[#1E5BB8]'
              }`}
            />
            {errors.phoneNumber && (
              <span className="text-xs text-red-500 font-medium mt-1.5 block">
                {errors.phoneNumber}
              </span>
            )}
          </div>
        </div>
      )}

      
      {currentStep === 2 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => onUpdateField('companyName', e.target.value)}
                placeholder="Company Legal Name"
                className={`w-full bg-[#F8FAFC] border rounded-[14px] px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.companyName
                    ? 'border-red-400 focus:ring-red-400/20 bg-red-50/10'
                    : 'border-slate-200/80 focus:ring-[#1E5BB8]/30 focus:border-[#1E5BB8]'
                }`}
              />
              {errors.companyName && (
                <span className="text-xs text-red-500 font-medium mt-1.5 block">
                  {errors.companyName}
                </span>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Industry <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.industry}
                onChange={(e) => onUpdateField('industry', e.target.value)}
                placeholder="e.g. Retail, FinTech, Manufacturing, Real Estate"
                className={`w-full bg-[#F8FAFC] border rounded-[14px] px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.industry
                    ? 'border-red-400 focus:ring-red-400/20 bg-red-50/10'
                    : 'border-slate-200/80 focus:ring-[#1E5BB8]/30 focus:border-[#1E5BB8]'
                }`}
              />
              {errors.industry && (
                <span className="text-xs text-red-500 font-medium mt-1.5 block">
                  {errors.industry}
                </span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
              Company Size (Employees)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {COMPANY_SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => onUpdateField('companySize', size)}
                  className={`py-3 px-4 rounded-[14px] text-xs sm:text-sm font-semibold border transition-all cursor-pointer text-center ${
                    formData.companySize === size
                      ? 'bg-[#104263] text-white border-[#104263] shadow-xs'
                      : 'bg-[#F8FAFC] border-slate-200/80 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      
      {currentStep === 3 && (
        <div className="space-y-4">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Select Service Area <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.id}
                onClick={() => onUpdateField('serviceArea', area.title)}
                className={`p-5 rounded-[20px] border cursor-pointer transition-all ${
                  formData.serviceArea === area.title
                    ? 'bg-[#EEF5FF] border-[#1E5BB8] ring-2 ring-[#1E5BB8]/15 shadow-sm'
                    : 'bg-[#F8FAFC] border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-headline font-bold text-base text-[#0A1727]">
                    {area.title}
                  </span>
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      formData.serviceArea === area.title
                        ? 'border-[#1E5BB8] bg-[#1E5BB8]'
                        : 'border-slate-300'
                    }`}
                  >
                    {formData.serviceArea === area.title && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
          {errors.serviceArea && (
            <span className="text-xs text-red-500 font-medium mt-1.5 block">
              {errors.serviceArea}
            </span>
          )}
        </div>
      )}

      
      {currentStep === 4 && (
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
            What information do you currently have? (Select all that apply) <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {DATA_SOURCES.map((source) => {
              const isChecked = formData.dataSources.includes(source);
              return (
                <button
                  key={source}
                  type="button"
                  onClick={() => onToggleDataSource(source)}
                  className={`p-3.5 rounded-[14px] text-xs sm:text-sm font-semibold border text-left flex items-center justify-between cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-[#EEF5FF] text-[#104263] border-[#1E5BB8]/50 shadow-xs'
                      : 'bg-[#F8FAFC] text-slate-700 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <span>{source}</span>
                  <span
                    className={`w-4 h-4 rounded-[6px] border flex items-center justify-center shrink-0 ${
                      isChecked
                        ? 'bg-[#104263] border-[#104263] text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.dataSources && (
            <span className="text-xs text-red-500 font-medium mt-2 block">
              {errors.dataSources}
            </span>
          )}
        </div>
      )}

      
      {currentStep === 5 && (
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
            Briefly describe what you are trying to understand, improve or solve. <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={5}
            value={formData.needDescription}
            onChange={(e) => onUpdateField('needDescription', e.target.value)}
            placeholder="Share your current challenges, target outcomes, or key reporting bottlenecks..."
            className={`w-full bg-[#F8FAFC] border rounded-[16px] p-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${
              errors.needDescription
                ? 'border-red-400 focus:ring-red-400/20 bg-red-50/10'
                : 'border-slate-200/80 focus:ring-[#1E5BB8]/30 focus:border-[#1E5BB8]'
            }`}
          />
          {errors.needDescription && (
            <span className="text-xs text-red-500 font-medium mt-1.5 block">
              {errors.needDescription}
            </span>
          )}
        </div>
      )}

      
      {currentStep === 6 && (
        <div>
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
            What would you like to receive? (Select all that apply) <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PREFERRED_OUTCOMES.map((outcome) => {
              const isChecked = formData.preferredOutcomes.includes(outcome);
              return (
                <button
                  key={outcome}
                  type="button"
                  onClick={() => onToggleOutcome(outcome)}
                  className={`p-4 rounded-[16px] text-xs sm:text-sm font-semibold border text-left flex items-center justify-between cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-[#EEF5FF] text-[#104263] border-[#1E5BB8]/50 shadow-xs'
                      : 'bg-[#F8FAFC] text-slate-700 border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <span>{outcome}</span>
                  <span
                    className={`w-4 h-4 rounded-[6px] border flex items-center justify-center shrink-0 ${
                      isChecked
                        ? 'bg-[#104263] border-[#104263] text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isChecked && (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          {errors.preferredOutcomes && (
            <span className="text-xs text-red-500 font-medium mt-2 block">
              {errors.preferredOutcomes}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
