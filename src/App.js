import React, { useState, useEffect } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData ? JSON.parse(savedData) : {
      name: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    };
  });
  const [formValidations, setFormValidations] = useState({
    step1: false,
    step2: false,
    step3: false
  });

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleValidation = (step, isValid) => {
    setFormValidations(prev => ({ ...prev, [step]: isValid }));
  };

  const handleSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      alert('Form submitted successfully!');
    } catch (error) {
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <Navigation currentStep={currentStep} setCurrentStep={setCurrentStep} formData={formData} formValidations={formValidations} />
      <div className="card mt-3">
        <div className="card-body">
          {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} handleValidation={handleValidation} />}
          {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} handleValidation={handleValidation} />}
          {currentStep === 3 && <Step3 formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} handleValidation={handleValidation} />}
        </div>
      </div>
    </div>
  );
};

export default App;
