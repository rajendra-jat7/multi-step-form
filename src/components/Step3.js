import React, { useEffect } from 'react';

const Step3 = ({ formData, prevStep, handleSubmit, handleValidation }) => {
  useEffect(() => {
    handleValidation('step3', true);
  }, [handleValidation]);

  return (
    <div>
      <h3>Confirmation</h3>
      <p><strong>Name :- </strong> {formData.name}</p>
      <p><strong>Email :- </strong> {formData.email}</p>
      <p><strong>Phone :- </strong> {formData.phone}</p>
      <p><strong>Address Line 1 :- </strong> {formData.address1}</p>
      <p><strong>Address Line 2 :- </strong> {formData.address2}</p>
      <p><strong>City :- </strong> {formData.city}</p>
      <p><strong>State :- </strong> {formData.state}</p>
      <p><strong>Zip Code :- </strong> {formData.zip}</p>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary mt-3" onClick={prevStep}>Back</button>
        <button type="button" className="btn btn-primary mt-3" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Step3;
