import { STEPS } from './types';

interface RequestStepperProps {
  currentStep: number;
  onStepSelect: (stepId: number) => void;
}

export function RequestStepper({ currentStep, onStepSelect }: RequestStepperProps) {
  return (
    <div className="bg-white/70 rounded-[28px] p-6 sm:p-7 border border-slate-200/70 shadow-xs">
      <div className="space-y-6 relative">
        {STEPS.map((step) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;
          return (
            <div
              key={step.id}
              onClick={() => {
                if (isCompleted) {
                  onStepSelect(step.id);
                }
              }}
              className={`flex items-start gap-4 transition-all duration-200 ${
                isCompleted ? 'cursor-pointer group' : ''
              }`}
            >
              
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-bold text-xs transition-all duration-200 ${
                  isActive
                    ? 'bg-[#104263] text-white shadow-md'
                    : isCompleted
                    ? 'bg-[#104263] text-white'
                    : 'bg-[#EEF5FF] text-[#1E5BB8]'
                }`}
              >
                {isCompleted ? (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  String(step.id).padStart(2, '0')
                )}
              </div>

             
              <div className="pt-0.5">
                <span
                  className={`text-sm sm:text-[15px] font-bold block transition-colors ${
                    isActive
                      ? 'text-[#0A1727]'
                      : isCompleted
                      ? 'text-slate-800 group-hover:text-[#104263]'
                      : 'text-slate-400'
                  }`}
                >
                  {step.name}
                </span>
                <span className="text-xs text-slate-400 font-medium block mt-0.5">
                  {step.subtext}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
