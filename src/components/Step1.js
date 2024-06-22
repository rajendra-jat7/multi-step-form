import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Step1 = ({ formData, setFormData, nextStep, handleValidation }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string().required('Phone is required')
    }),
    onSubmit: values => {
      setFormData(values);
      nextStep();
    }
  });

  useEffect(() => {
    handleValidation('step1', formik.isValid);
  }, [formik.isValid, handleValidation]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div className="invalid-feedback">{formik.errors.name}</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div className="invalid-feedback">{formik.errors.email}</div> : null}
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? <div className="invalid-feedback">{formik.errors.phone}</div> : null}
      </div>
      <button type="submit" className="btn btn-primary mt-3" disabled={!formik.isValid}>Next</button>
    </form>
  );
};

export default Step1;
