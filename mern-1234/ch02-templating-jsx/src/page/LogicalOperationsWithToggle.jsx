import React, { useState } from "react";

function LogicalOperationsWithToggle() {
  const [msg1, setMsg1] = useState("");

  const handleChange = (e) => {
    setMsg1(e.target.value);
  };
  return (
    <>
      <input
        className="form-control"
        value={msg1}
        onChange={handleChange}
      ></input>
      {(msg1 == "123" || msg1 == "abc" || !(msg1 == "xyz")) && (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quisquam
          ab, eaque provident optio tenetur eius! Iusto rem hic architecto aut
          molestias, quisquam aliquid, facilis voluptatem rerum, exercitationem
          doloremque minus.
        </div>
      )}
    </>
  );
}

export default LogicalOperationsWithToggle;
