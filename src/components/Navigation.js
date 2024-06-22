import React from 'react';

const Navigation = ({ currentStep, setCurrentStep, formData, formValidations }) => {
  const isStepValid = (step) => {
    if (step === 1) return formValidations.step1;
    if (step === 2) return formValidations.step1 && formValidations.step2;
    if (step === 3) return formValidations.step1 && formValidations.step2 && formValidations.step3;
  };

  return (
    <ul className="nav nav-tabs modern-tabs">
      <li className="nav-item">
        <span
          className={`nav-link ${currentStep === 1 ? 'active' : ''} ${isStepValid(1) ? '' : 'disabled'}`}
          onClick={() => isStepValid(1) && setCurrentStep(1)}
        >
          Step 1
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`nav-link ${currentStep === 2 ? 'active' : ''} ${isStepValid(2) ? '' : 'disabled'}`}
          onClick={() => isStepValid(2) && setCurrentStep(2)}
        >
          Step 2
        </span>
      </li>
      <li className="nav-item">
        <span
          className={`nav-link ${currentStep === 3 ? 'active' : ''} ${isStepValid(3) ? '' : 'disabled'}`}
          onClick={() => isStepValid(3) && setCurrentStep(3)}
        >
          Step 3
        </span>
      </li>
    </ul>
  );
};

export default Navigation;
