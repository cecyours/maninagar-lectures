import React from "react";
import { useUser } from "../hooks/useUser";

function CustomHookDemo() {
  const { user } = useUser();

  console.log('loed...')
  return (
    <div>
      <h1>{user.name}</h1>
      <div>{user.marks}</div>
    </div>
  );
}

export default CustomHookDemo;
