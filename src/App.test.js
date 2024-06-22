import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('submits the form successfully', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });

  fireEvent.click(screen.getByText(/Next/i));

  fireEvent.change(screen.getByLabelText(/Address Line 1/i), { target: { value: '123 Main St' } });
  fireEvent.change(screen.getByLabelText(/City/i), { target: { value: 'New York' } });
  fireEvent.change(screen.getByLabelText(/State/i), { target: { value: 'NY' } });
  fireEvent.change(screen.getByLabelText(/Zip Code/i), { target: { value: '10001' } });

  fireEvent.click(screen.getByText(/Next/i));
  fireEvent.click(screen.getByText(/Submit/i));

  expect(screen.getByText(/Confirmation/i)).toBeInTheDocument();
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
  expect(screen.getByText(/123 Main St/i)).toBeInTheDocument();
});
