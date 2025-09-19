import React, { useState } from "react";
import { Link } from "react-router";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
              <p className="lead">
                Get in touch with us. We'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-5">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title text-primary mb-4">Get in Touch</h3>

                  {/* Contact Details */}
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-geo-alt fs-5"></i>
                      </div>
                      <div>
                        <h6 className="mb-1 fw-bold">Address</h6>
                        <p className="text-muted mb-0">
                          123 Business Street City, State 12345
                        </p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-telephone fs-5"></i>
                      </div>
                      <div>
                        <h6 className="mb-1 fw-bold">Phone</h6>
                        <p className="text-muted mb-0">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-envelope fs-5"></i>
                      </div>
                      <div>
                        <h6 className="mb-1 fw-bold">Email</h6>
                        <p className="text-muted mb-0">info@onemart.com</p>
                      </div>
                    </div>

                    <div className="d-flex align-items-center">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-clock fs-5"></i>
                      </div>
                      <div>
                        <h6 className="mb-1 fw-bold">Business Hours</h6>
                        <p className="text-muted mb-0">
                          Mon - Fri: 9:00 AM - 6:00 PM
                          <br />
                          Sat: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="card-title text-primary mb-4">
                    Send us a Message
                  </h3>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-bold">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-bold">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="message" className="form-label fw-bold">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="6"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us how we can help you..."
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg px-5"
                        >
                          <i className="bi bi-send me-2"></i>Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold text-primary">
                Frequently Asked Questions
              </h2>
              <p className="lead text-muted">
                Find answers to common questions
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq1">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      How can I track my order?
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="faq1"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      You can track your order by logging into your account and
                      going to the "My Orders" section. You'll also receive
                      email updates with tracking information.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      What is your return policy?
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq2"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      We offer a 30-day return policy for most items. Items must
                      be in original condition with tags attached. Please
                      contact us for return authorization.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      How long does shipping take?
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq3"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Standard shipping takes 3-5 business days. Express
                      shipping is available for next-day delivery in most areas.
                      International shipping varies by location.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="faq4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      Do you offer customer support?
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq4"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes! Our customer support team is available Monday through
                      Friday, 9 AM to 6 PM. You can reach us via phone, email,
                      or live chat on our website.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
