import { useState } from 'react';
import coverImg from '../../assets/images/newCoverImage.jpeg';
import type { FormData } from './types';
import { STEPS, SERVICE_REQUEST_CONFIG } from './types';
import { RequestStepper } from './RequestStepper';
import { RequestStepFields } from './RequestStepFields';
import { RequestSuccessCard } from './RequestSuccessCard';
import { RequestAssuranceCards } from './RequestAssuranceCards';

export { SERVICE_REQUEST_CONFIG };

export function RequestServicePage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    jobTitle: '',
    businessEmail: '',
    phoneNumber: '',
    companyName: '',
    industry: '',
    companySize: '11–50',
    serviceArea: 'Finance',
    dataSources: ['Excel'],
    needDescription: '',
    preferredOutcomes: ['Dashboard'],
  });

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleDataSource = (source: string) => {
    const exists = formData.dataSources.includes(source);
    const updated = exists ? formData.dataSources.filter((s) => s !== source) : [...formData.dataSources, source];
    updateField('dataSources', updated);
  };

  const toggleOutcome = (outcome: string) => {
    const exists = formData.preferredOutcomes.includes(outcome);
    const updated = exists ? formData.preferredOutcomes.filter((o) => o !== outcome) : [...formData.preferredOutcomes, outcome];
    updateField('preferredOutcomes', updated);
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full Name is required';
      } else if (formData.fullName.trim().length < 2) {
        newErrors.fullName = 'Please enter at least 2 characters';
      }

      if (!formData.jobTitle.trim()) {
        newErrors.jobTitle = 'Job Title is required';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.businessEmail.trim()) {
        newErrors.businessEmail = 'Business Email is required';
      } else if (!emailRegex.test(formData.businessEmail.trim())) {
        newErrors.businessEmail = 'Please enter a valid email format';
      }

      const phoneRegex = /^[\d\s+\-()]{8,}$/;
      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = 'Phone Number is required';
      } else if (!phoneRegex.test(formData.phoneNumber.trim())) {
        newErrors.phoneNumber = 'Please enter a valid phone number (at least 8 digits)';
      }
    } else if (step === 2) {
      if (!formData.companyName.trim()) {
        newErrors.companyName = 'Company Name is required';
      }
      if (!formData.industry.trim()) {
        newErrors.industry = 'Industry is required';
      }
      if (!formData.companySize) {
        newErrors.companySize = 'Company Size is required';
      }
    } else if (step === 3) {
      if (!formData.serviceArea) {
        newErrors.serviceArea = 'Please select a service area';
      }
    } else if (step === 4) {
      if (formData.dataSources.length === 0) {
        newErrors.dataSources = 'Please select at least one data source';
      }
    } else if (step === 5) {
      if (!formData.needDescription.trim()) {
        newErrors.needDescription = 'Please describe what you are trying to understand or solve';
      } else if (formData.needDescription.trim().length < 10) {
        newErrors.needDescription = 'Please provide a bit more detail (minimum 10 characters)';
      }
    } else if (step === 6) {
      if (formData.preferredOutcomes.length === 0) {
        newErrors.preferredOutcomes = 'Please select at least one preferred outcome';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (!validateStep(currentStep)) {
      return;
    }

    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    } else {
      await submitServiceRequest();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setErrors({});
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  const submitServiceRequest = async () => {
    setIsSubmitting(true);

    try {
      
      const payload = {
        _subject: `New BAYINA Service Request: ${formData.companyName} (${formData.fullName})`,
        _template: 'table',
        _captcha: 'false',
        'Full Name': formData.fullName,
        'Job Title': formData.jobTitle,
        'Business Email': formData.businessEmail,
        'Phone Number': formData.phoneNumber,
        'Company Name': formData.companyName,
        'Industry': formData.industry,
        'Company Size': formData.companySize,
        'Service Area': formData.serviceArea,
        'Data Sources': formData.dataSources.join(', '),
        'Business Need': formData.needDescription,
        'Preferred Outcomes': formData.preferredOutcomes.join(', '),
      };

      await fetch(SERVICE_REQUEST_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      
      try {
        const STORAGE_KEY = 'bayina_service_requests';
        const LEGACY_KEY = 'bayyina_service_requests';

        let storedRequests: unknown[] = [];
        const currentStored = localStorage.getItem(STORAGE_KEY);

        if (currentStored) {
          storedRequests = JSON.parse(currentStored);
        } else {
          // Backward-compatible migration: read legacy key if new key does not exist yet
          const legacyStored = localStorage.getItem(LEGACY_KEY);
          if (legacyStored) {
            storedRequests = JSON.parse(legacyStored);
          }
        }

        if (!Array.isArray(storedRequests)) {
          storedRequests = [];
        }

        storedRequests.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify(storedRequests));
      } catch {
        // localStorage fallback
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 380, behavior: 'smooth' });
    } catch (err) {
      console.warn('Form dispatch note:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      fullName: '',
      jobTitle: '',
      businessEmail: '',
      phoneNumber: '',
      companyName: '',
      industry: '',
      companySize: '11–50',
      serviceArea: 'Finance',
      dataSources: ['Excel'],
      needDescription: '',
      preferredOutcomes: ['Dashboard'],
    });
  };

  const currentStepMeta = STEPS[currentStep - 1];

  return (
    <div className="bg-[#F8FAFC] pb-24">
      {/* 1. Official Bayina Bilingual Cover Banner - Full Width Edge-to-Edge */}
      <section className="w-full bg-white border-b border-slate-200/60 overflow-hidden">
        <img
          src={coverImg}
          alt="BAYINA - Where Finance Meets Analytics"
          className="w-full h-auto object-cover block select-none"
        />
      </section>

      {/* 2. Main Interactive Multi-Step Request Section */}
      <section className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h1 className="font-headline font-bold text-3xl sm:text-4xl lg:text-[46px] text-[#0A1727] tracking-tight mb-4">
              Tell Us What You Need
            </h1>
            <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal">
              Tell us what you are trying to understand, improve, monitor, or solve. The information you provide will help us understand your business and identify the right direction.
            </p>
          </div>

          {/* Stepper + Form Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
            {/* Left Column: Vertical Step Navigation */}
            <div className="lg:col-span-4">
              <RequestStepper
                currentStep={currentStep}
                onStepSelect={(stepId) => {
                  setCurrentStep(stepId);
                  setErrors({});
                }}
              />
            </div>

            {/* Right Column: Step Form Container Card */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.06)] min-h-[460px] flex flex-col justify-between">
                {!isSubmitted ? (
                  <>
                    {/* Top Row: Title & Step Counter */}
                    <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
                      <div>
                        <h2 className="font-headline font-bold text-2xl sm:text-3xl text-[#0A1727] tracking-tight">
                          {currentStepMeta.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-400 font-normal mt-1">
                          {currentStepMeta.startText}
                        </p>
                      </div>
                      <span className="bg-[#104263] text-white text-xs font-bold px-4 py-1.5 rounded-full shrink-0">
                        Step {currentStep} of 6
                      </span>
                    </div>

                    {/* Step Body Content */}
                    <div className="flex-1">
                      <RequestStepFields
                        currentStep={currentStep}
                        formData={formData}
                        errors={errors}
                        onUpdateField={updateField}
                        onToggleDataSource={toggleDataSource}
                        onToggleOutcome={toggleOutcome}
                      />
                    </div>

                    {/* Action Navigation Buttons */}
                    <div className="pt-8 border-t border-slate-100 flex items-center justify-between gap-4 mt-8">
                      {currentStep > 1 ? (
                        <button
                          type="button"
                          onClick={handleBack}
                          disabled={isSubmitting}
                          className="px-6 py-3.5 rounded-[14px] border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all cursor-pointer disabled:opacity-50"
                        >
                          Back
                        </button>
                      ) : (
                        <div />
                      )}

                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={isSubmitting}
                        className="bg-[#104263] hover:bg-[#0c334d] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-[14px] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer ml-auto flex items-center gap-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <span>{currentStep === 6 ? 'Submit Service Request' : 'Continue'}</span>
                        )}
                      </button>
                    </div>
                  </>
                ) : (
                  <RequestSuccessCard formData={formData} onReset={handleReset} />
                )}
              </div>
            </div>
          </div>

          
          <RequestAssuranceCards />
        </div>
      </section>
    </div>
  );
}
