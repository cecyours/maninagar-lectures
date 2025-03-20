import React, { use, useEffect, useState } from "react";

const Event = (props) => {
  const [value, setvalue] = useState("");
  function handleClick(name) {
    console.log("Who is herer:", name);
  }

  function handleInput(value) {
    setvalue(value);
  }

  return (
    <div>
      <button onClick={() => handleClick(props.name)}> Click me</button>

      <input
        className="form-control"
        type="text"
        onInput={(e) => handleInput(e.target.value)}
      />
      <hr />
      {value}
    </div>
  );
};

export default Event;
