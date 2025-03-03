import React, { useContext } from "react";
import { MyInputContext } from "../context/MyInputContext";

function Student() {
  const {input} = useContext(MyInputContext);

  return <div>Student {input}</div>;
}

export default Student;
