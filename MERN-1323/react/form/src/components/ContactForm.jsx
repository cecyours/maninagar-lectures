import React, { useState } from 'react';

const Contactform = () => {
  const [formdata, setformdata] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setsubmitted] = useState(false);

  const changeEvent = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  // Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!formdata.fullname) {
      newErrors.fullname = "Full Name is required";
    } else if (formdata.fullname.length < 2) {
      newErrors.fullname = "Name must be at least 2 characters";
    }

    if (!formdata.email) {
      newErrors.email = "Email is required";
    } else if (!formdata.email.includes("@")) {
      newErrors.email = "Email is invalid";
    }

    if (!formdata.subject) {
      newErrors.subject = "Please select subject";
    }

    if (!formdata.message) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const submitEvent = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setsubmitted(true);

      setformdata({
        fullname: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear errors after successful submission
      setErrors({});
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
      <div className='card shadow-lg p-4' style={{ width: "400px", borderRadius: "15px" }}>
        <h3 className='text-center mb-4 text-primary'>Contact Form</h3>

        {submitted && (
          <div className='alert alert-success text-center' role='alert'>
            Message sent successfully!
          </div>
        )}

        <form onSubmit={submitEvent}>
          <div className='mb-3'>
            <label className='form-label'>Full name</label>
            <input
              type="text"
              className='form-control'
              name='fullname'
              value={formdata.fullname}
              onChange={changeEvent}
              placeholder='Enter your full name'
            />
            {errors.fullname && <small className='text-danger'>{errors.fullname}</small>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Email address</label>
            <input
              type="text"
              className='form-control'
              name='email'
              value={formdata.email}
              onChange={changeEvent}
              placeholder='Enter your email address'
            />
            {errors.email && <small className='text-danger'>{errors.email}</small>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Subject</label>
            <select
              className='form-select'
              name='subject'
              value={formdata.subject}
              onChange={changeEvent}
            >
              <option value="">Select subject</option>
              <option value="feedback">Feedback</option>
              <option value="support">Support</option>
              <option value="general inquiry">General Inquiry</option>
            </select>
            {errors.subject && <small className='text-danger'>{errors.subject}</small>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Message</label>
            <textarea
              className='form-control'
              name="message"
              rows="3"
              value={formdata.message}
              onChange={changeEvent}
              placeholder='Write your message...'
            ></textarea>
            {errors.message && <small className='text-danger'>{errors.message}</small>}
          </div>

          <button type='submit' className='btn btn-primary w-100'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contactform;
