import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ContactUsUpdate = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    if (!data.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const fetchContactUsData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/contact-us/${id}`
      );
      console.log(response.data.data);

      setData(response.data.data);
    } catch (error) {
      console.log("Error fething data ");
    }
  };

  useEffect(() => {
    fetchContactUsData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const response = await axios.put(
        `http://localhost:9000/contact-us/${id}`,
        data
      );
      console.log(response.data);

      navigate("/admin/contact-us");

      setData({ name: "", email: "", message: "" }); // Reset form
      setErrors({});
    } else {
      console.log("Form contains errors.");
    }
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white text-center">
                <h4 className="mb-0">Contact Us Update</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your name"
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your email"
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Enter your name"
                      value={data.phoneNumber}
                      onChange={(e) =>
                        setData({ ...data, phoneNumber: e.target.value })
                      }
                    />
                    {errors.phoneNumber && (
                      <div className="invalid-feedback">
                        {errors.phoneNumber}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      placeholder="Write your message"
                      value={data.message}
                      onChange={(e) =>
                        setData({ ...data, message: e.target.value })
                      }
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsUpdate;
