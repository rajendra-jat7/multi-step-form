import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Step1 from './Step1';

test('renders Step1 component', () => {
  const formData = { name: '', email: '', phone: '' };
  const setFormData = jest.fn();
  const nextStep = jest.fn();
  const handleValidation = jest.fn();

  render(
    <Step1
      formData={formData}
      setFormData={setFormData}
      nextStep={nextStep}
      handleValidation={handleValidation}
    />
  );

  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
});

test('validates form inputs', async () => {
  const formData = { name: '', email: '', phone: '' };
  const setFormData = jest.fn();
  const nextStep = jest.fn();
  const handleValidation = jest.fn();

  render(
    <Step1
      formData={formData}
      setFormData={setFormData}
      nextStep={nextStep}
      handleValidation={handleValidation}
    />
  );

  fireEvent.click(screen.getByText(/Next/i));

  expect(await screen.findAllByText(/is required/i)).toHaveLength(3);
});
