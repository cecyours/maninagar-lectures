import React, { useState } from "react";

const ContactUS = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="fluid-container">
      <div className="bg-primary-subtle w-50 mx-auto rounded-3 mt-4">
        <h3 className="text-center">Contact Us Form</h3>

        <form onSubmit={handleSubmit} action="" className="d-grid gap-4 p-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className="form-control"
          />
          <input
            type="text"
            placeholder="Enter Your Email"
            className="form-control"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
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
