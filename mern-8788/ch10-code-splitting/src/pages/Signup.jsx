import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
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

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      setSuccess("");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setSuccess("");
      return;
    }

    // if all good
    setError("");
    setSuccess("Signup Successful 🎉");
    console.log("Form Data Submitted:", formData);

    // reset form
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h2 className="text-center text-primary mb-4">Create Account</h2>

              {/* Error / Success Messages */}
              {error && (
                <div className="alert alert-danger py-2 text-center">{error}</div>
              )}
              {success && (
                <div className="alert alert-success py-2 text-center">
                  {success}
                </div>
              )}

              {/* Signup Form */}
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
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

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label fw-semibold"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter password"
                  />
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Sign Up
                  </button>
                </div>
              </form>

              {/* Optional Footer */}
              <div className="text-center mt-3">
                <p className="text-muted">
                  Already have an account?{" "}
                  <a href="/login" className="text-primary fw-semibold">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
