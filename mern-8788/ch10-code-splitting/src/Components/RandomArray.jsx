import React from "react";
import { getRandomArray, getRandomNumber } from "../utils/comman";

function RandomArray() {
  const data1 = getRandomNumber();
  const data2 = getRandomArray();
  return (
    <div> 
      <div> 
        {data2.map((k, i) => (
          <div key={i}>{k}</div>
        ))}
      </div>
    </div>
  );
}

export default RandomArray;
