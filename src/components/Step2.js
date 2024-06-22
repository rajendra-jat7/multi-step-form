import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Step2 = ({ formData, setFormData, nextStep, prevStep, handleValidation }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      address1: Yup.string().required('Address Line 1 is required'),
      address2: Yup.string(),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      zip: Yup.string().required('Zip Code is required')
    }),
    onSubmit: values => {
      setFormData(values);
      nextStep();
    }
  });

  useEffect(() => {
    handleValidation('step2', formik.isValid);
  }, [formik.isValid, handleValidation]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="address1">Address Line 1</label>
        <input
          id="address1"
          name="address1"
          type="text"
          className={`form-control ${formik.touched.address1 && formik.errors.address1 ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address1}
        />
        {formik.touched.address1 && formik.errors.address1 ? <div className="invalid-feedback">{formik.errors.address1}</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor="address2">Address Line 2</label>
        <input
          id="address2"
          name="address2"
          type="text"
          className={`form-control ${formik.touched.address2 && formik.errors.address2 ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address2}
        />
        {formik.touched.address2 && formik.errors.address2 ? <div className="invalid-feedback">{formik.errors.address2}</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          className={`form-control ${formik.touched.city && formik.errors.city ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city ? <div className="invalid-feedback">{formik.errors.city}</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          id="state"
          name="state"
          type="text"
          className={`form-control ${formik.touched.state && formik.errors.state ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.state}
        />
        {formik.touched.state && formik.errors.state ? <div className="invalid-feedback">{formik.errors.state}</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor="zip">Zip Code</label>
        <input
          id="zip"
          name="zip"
          type="text"
          className={`form-control ${formik.touched.zip && formik.errors.zip ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.zip}
        />
        {formik.touched.zip && formik.errors.zip ? <div className="invalid-feedback">{formik.errors.zip}</div> : null}
      </div>
      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary mt-3" onClick={prevStep}>Back</button>
        <button type="submit" className="btn btn-primary mt-3" disabled={!formik.isValid}>Next</button>
      </div>
    </form>
  );
};

export default Step2;
