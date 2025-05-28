import React, { useState } from "react";

const ContactUS = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!data.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!data.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!data.message) {
      newErrors.message = "message  is required";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(data);
    } else {
      console.log("kuch to galat hain");
    }
  };
  return (
    <div className="fluid-container">
      <div className="bg-primary-subtle w-50 mx-auto rounded-3 mt-4">
        <h3 className="text-center">Contact Us Form</h3>

        <form onSubmit={handleSubmit} action="" className="d-grid gap-4 p-4">
          <span className="text-danger"> {errors.name}</span>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="form-control"
          />

          <span className="text-danger"> {errors.email}</span>

          <input
            type="text"
            placeholder="Enter Your Email"
            className="form-control"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />

          <span className="text-danger"> {errors.message}</span>

          <textarea
            type="text"
            placeholder="Enter Your Message"
            className="form-control"
            onChange={(e) => setData({ ...data, message: e.target.value })}
            value={data.message}
          />

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
