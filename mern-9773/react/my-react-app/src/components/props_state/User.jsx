import React from "react";

function User({ name, age }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
        <h1>Hey</h1>
        <h3>User Name: {name} </h3>
        <p>Age: {age} </p>
    </div>
  );
}

export default User;
