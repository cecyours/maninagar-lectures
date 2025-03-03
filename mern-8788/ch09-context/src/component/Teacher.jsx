import React, { useContext } from "react";
import { MyInputContext } from "../context/MyInputContext";

function Teacher() {
  const { input, setInput } = useContext(MyInputContext);
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default Teacher;
