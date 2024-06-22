import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigation from './Navigation';

test('renders Navigation component', () => {
  const currentStep = 1;
  const setCurrentStep = jest.fn();
  const formData = {};
  const formValidations = { step1: true, step2: false, step3: false };

  render(
    <Navigation
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      formData={formData}
      formValidations={formValidations}
    />
  );

  expect(screen.getByText(/Step 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Step 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Step 3/i)).toBeInTheDocument();
});

test('navigates between steps', () => {
  const currentStep = 1;
  const setCurrentStep = jest.fn();
  const formData = {};
  const formValidations = { step1: true, step2: true, step3: false };

  render(
    <Navigation
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      formData={formData}
      formValidations={formValidations}
    />
  );

  fireEvent.click(screen.getByText(/Step 2/i));
  expect(setCurrentStep).toHaveBeenCalledWith(2);
});
