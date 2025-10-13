import React, { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const changeEvent = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitEvent = (e) => {
        e.preventDefault();

        if (!formData.fullname || !formData.email || !formData.subject || !formData.message) {
        alert("⚠️ Please fill in all fields before submitting!");
        return;
        }

        console.log("Contact Form Submitted:", formData);

        console.log("Full Name:", formData.fullname);
        console.log("Email:", formData.email);
        console.log("Subject:", formData.subject);
        console.log("Message:", formData.message);

        setSubmitted(true);

        // reset form
        setFormData({
            fullname: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
            <h3 className="text-center mb-4 text-primary">📩 Contact Us</h3>

            {submitted && (
            <div className="alert alert-success text-center" role="alert">
                ✅ Message Sent Successfully!
            </div>
            )}

            <form onSubmit={submitEvent}>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                type="text"
                className="form-control"
                name="fullname"
                value={formData.fullname}
                onChange={changeEvent}
                placeholder="Enter your full name"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={changeEvent}
                placeholder="Enter your email address"
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Subject</label>
                <select
                className="form-select"
                name="subject"
                value={formData.subject}
                onChange={changeEvent}
                >
                <option value="">Select Subject</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
                <option value="General Inquiry">General Inquiry</option>
                </select>
            </div>

            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                className="form-control"
                name="message"
                rows="3"
                value={formData.message}
                onChange={changeEvent}
                placeholder="Write your message..."
                ></textarea>
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
