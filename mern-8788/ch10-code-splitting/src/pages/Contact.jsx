import React, { useState } from "react";

const Contact = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for feedback messages
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("All fields are required!");
      setSuccess("");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address!");
      setSuccess("");
      return;
    }

    // Simulate sending message (you can replace this with an API call)
    console.log("Form Data Submitted:", formData);

    setError("");
    setSuccess("✅ Message sent successfully!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center text-primary mb-4">Contact Us</h2>
              <p className="text-center text-muted mb-4">
                We'd love to hear from you! Please fill out the form below and
                we'll get back to you soon.
              </p>

              {/* Alert Messages */}
              {error && <div className="alert alert-danger text-center">{error}</div>}
              {success && <div className="alert alert-success text-center">{success}</div>}

              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Optional Contact Info */}
          <div className="text-center mt-4 text-muted">
            <p>
              📞 <strong>+91 98765 43210</strong> <br />
              📧 <strong>support@example.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
