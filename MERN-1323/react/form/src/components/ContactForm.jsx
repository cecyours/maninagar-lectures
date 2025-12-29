import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    gender: "",
    subscribe: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (formData.fullname === "") {
      newErrors.fullname = "Full Name is required";
    } else if (formData.fullname.length < 2) {
      newErrors.fullname = "Name must be at least 2 characters";
    }

    if (formData.email === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email is invalid";
    }

    if (formData.phone === "") {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (formData.subject === "") {
      newErrors.subject = "Please select subject";
    }

    if (formData.message === "") {
      newErrors.message = "Message is required";
    }

    if (formData.gender === "") {
      newErrors.gender = "Please select gender";
    }

    return newErrors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);

      setSuccess(true);

      setFormData({
        fullname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        gender: "",
        subscribe: false,
      });

      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "500px" }}>
        <h3 className="text-center text-primary mb-3">📩 Contact Form</h3>

        {success && (
          <div className="alert alert-success text-center">
            ✅ Form Submitted Successfully
          </div>
        )}

        <form onSubmit={handleSubmit}>
       
          <input
            className="form-control mb-1"
            name="fullname"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleChange}
          />
          <small className="text-danger">{errors.fullname}</small>

          <input
            className="form-control mt-2 mb-1"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <small className="text-danger">{errors.email}</small>

          <input
            className="form-control mt-2 mb-1"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <small className="text-danger">{errors.phone}</small>

          <select
            className="form-select mt-2 mb-1"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option value="">Select Subject</option>
            <option>Feedback</option>
            <option>Support</option>
          </select>
          <small className="text-danger">{errors.subject}</small>

          <textarea
            className="form-control mt-2 mb-1"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <small className="text-danger">{errors.message}</small>

          <div className="mt-2">
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={formData.gender === "Male"}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              className="ms-3"
              onChange={handleChange}
              checked={formData.gender === "Female"}
            />{" "}
            Female
            <br />
            <small className="text-danger">{errors.gender}</small>
          </div>

          <div className="form-check mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <label className="form-check-label">Subscribe</label>
          </div>

          <button className="btn btn-primary w-100 mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
