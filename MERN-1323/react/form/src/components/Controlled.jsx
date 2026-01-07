import React, { useState } from "react";

const Controlled = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const handlSubmit = (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "" || course === "") {
      setMessage("All fields are required");
    } else {
      setMessage("✅ Form submitted successfully!");

      setCourse("");
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div className="w-100 ">
      <div
        style={{ width: "400px", height: "400px" }}
        className="bg-light shadow border border-dark  rounded-4 p-3  mt-5 mx-auto  "
      >
        <h3 className="text-center">User Form</h3>

        {message && <div>{message}</div>}

        <form onSubmit={handlSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="firstName">last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="Course">Course</label>
            <input
              type="text"
              name="course"
              value={course}
              className="form-control"
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>

          <button className="btn btn-success w-100 mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Controlled;
