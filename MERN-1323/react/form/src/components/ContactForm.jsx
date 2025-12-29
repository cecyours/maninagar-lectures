import React, { useState, useEffect } from "react";

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

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const changeEvent = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.gender) newErrors.gender = "Please select gender";

    return newErrors;
  };

  const submitEvent = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      setSubmitted(true);

      // reset form
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        gender: "",
        subscribe: false,
      });
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "500px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4 text-primary">📩 Contact Us</h3>

        {submitted && (
          <div className="alert alert-success text-center" role="alert">
            ✅ Message Sent Successfully!
          </div>
        )}

        <form onSubmit={submitEvent} noValidate>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
              name="fullname"
              value={formData.fullname}
              onChange={changeEvent}
              placeholder="Enter your full name"
            />
            {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              value={formData.email}
              onChange={changeEvent}
              placeholder="Enter your email address"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              name="phone"
              value={formData.phone}
              onChange={changeEvent}
              placeholder="Enter your phone number"
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          {/* Subject */}
          <div className="mb-3">
            <label className="form-label">Subject</label>
            <select
              className={`form-select ${errors.subject ? "is-invalid" : ""}`}
              name="subject"
              value={formData.subject}
              onChange={changeEvent}
            >
              <option value="">Select Subject</option>
              <option value="Feedback">Feedback</option>
              <option value="Support">Support</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              name="message"
              rows="3"
              value={formData.message}
              onChange={changeEvent}
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label me-3">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${errors.gender ? "is-invalid" : ""}`}
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={changeEvent}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className={`form-check-input ${errors.gender ? "is-invalid" : ""}`}
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={changeEvent}
                />
                <label className="form-check-label">Female</label>
              </div>
              {errors.gender && <div className="invalid-feedback d-block">{errors.gender}</div>}
            </div>
          </div>

          {/* Subscribe */}
          <div className="mb-3 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={changeEvent}
            />
            <label className="form-check-label">Subscribe to newsletter</label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
