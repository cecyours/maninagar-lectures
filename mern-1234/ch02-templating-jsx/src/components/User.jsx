import React from "react";

function User({ name, prof, ...props }) {
  return (
    <div {...props}>
      <div>{name}</div>
      <div>{prof}</div>
    </div>
  );
}

export default User;
