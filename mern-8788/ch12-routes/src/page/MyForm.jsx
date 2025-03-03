import React, { useState } from "react";
import { useBlocker, useNavigate } from "react-router-dom";

function MyForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const handleChange = (e) => {
    setUsername(e.target.value);
    setIsDirty(true);
  };
  const blocker = useBlocker(({ nextLocation }) => {
    
    return isDirty && !window.confirm("Are you want to sure close");
  });
  return (
    <div>
      <input value={username} type="text" onChange={handleChange} />
      <button
        className=""
        onClick={() => {
          navigate("/my-form");
        }}
      >
        Go Home Page
      </button>
    </div>
  );
}

export default MyForm;
