import React, { useState } from "react";

function InputEvents() {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    console.log(e.key);

    if (e.key == "Enter") {
      if (e.target.style.color == "red") {
        e.target.style.color = "green";
      } else {
        e.target.style.color = "red";
      }
    }
  };
  return (
    <div>
      <input
        value={value}
        className="form-control"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default InputEvents;
