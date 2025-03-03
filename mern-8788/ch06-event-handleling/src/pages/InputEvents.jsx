import React, { useState } from "react";

function InputEvents() {
  const [value, setValue] = useState(1);

  const handleChange = (e) => {
    setValue(e.target.value);
    setTimeout(() => {
      console.log({ key: e.key,value:e.target.value });
    }, 2000);
  };  

  const handleKeyDown = (event) => {
    

    if (event.key == "Enter") {
      if (event.target.style.color == "red") {
        event.target.style.color = "green";
      } else {
        event.target.style.color = "red";
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
