import { Map } from "immutable";
import React, { useState } from "react";

const ImmutableMap = () => {
  const [data, setData] = useState(Map({ name: "john", age: 18 }));

  const increaseAge = () => {
    setData(data.set("age", data.get("age") + 1));
  };
  return (
    <div>
      <p> Name :{data.get("name")} </p>

      <p> age : {data.get("age")} </p>

      <button onClick={increaseAge}> Increase age </button>
    </div>
  );
};

export default ImmutableMap;
