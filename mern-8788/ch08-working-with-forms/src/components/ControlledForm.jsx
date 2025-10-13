import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("Tanvi Darji");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You entered: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Controlled Component Example</h3>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
