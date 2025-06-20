import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUS = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const response = await axios.post(
        "http://localhost:9000/contact-us",
        data
      );

      console.log(response.data);
      setData({ name: "", email: "", message: "" }); // Reset form
      setErrors({});
    } else {
      console.log("Form contains errors.");
    }
  };

  return (
    <div className="container-fluid py-2">
      {/* bread crumb */}
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>
      <div className="row justify-content-center ">
        <img className=" rounded-5" src="./contactus.jpg" height={300} alt="" />

        <div className="row p-5">
          {/* main form */}
          <div className="col-md-6  mt-4">
            <div className="  p-3 border-end border-dark ">
              <div className="card-body">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={` form-control border border-secondary ${
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
                    <label htmlFor="email" className="">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={` form-control border border-secondary ${
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
                    <label htmlFor="name" className="">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      className={` form-control border border-secondary ${
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
                    <label htmlFor="message" className="">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className={` form-control border border-secondary ${
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
                    <button type="submit" className="btn btn-primary ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4  ">
            <div className=" d-flex   ">
              <img
                src="./contact-us.avif"
                className="object-fit-contain mx-auto"
                width={300}
                alt=""
              />
            </div>

            <div className="row">
              <div className="col-4">
                📞 : <span> +91 98745 63210</span>
              </div>
              <div className="col-3">
                📧 : <span> cec@gmail.com</span>
              </div>
              <div className="col-5">
                📍 : <span> Gopal Tower , Maninangar </span>
              </div>
            </div>

            <div style={{ textAlign: "justify" }} className="mt-3">
              <p>
                ✉️: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Minus laudantium quis distinctio veniam numquam architecto quae,
                inventore cumque! Dignissimos dolorum eius nesciunt sunt, ut
                modi sapiente qui alias tenetur fuga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
