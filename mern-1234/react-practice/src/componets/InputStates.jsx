import React, { useState } from "react";

function InputStates() {
  const [text, setText] = useState("Student");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="d-flex gap-3">
      <div>
        <input value={text} onChange={handleChange} className="form-control" />
      </div>
      <div>
        <button className="btn btn-primary">Show</button>
      </div>
    </div>
  );
}
// tailwind

export default InputStates;
