import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("CEC Vatva ");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`value is ${name} `);
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} action="">
          <input
            type="text"
            className="form-control border borrder-black "
            onChange={(e) => handleChange(e)}
            value={name}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ControlledForm;
