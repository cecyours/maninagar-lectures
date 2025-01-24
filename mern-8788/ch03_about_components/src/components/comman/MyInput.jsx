import React from "react";

function MyInput({ children,className,...props }) {
  return (
    <>
      <label className="form-label">{children}</label>
      <input className={className} {...props}/>
    </>
  );
}

export default MyInput;
