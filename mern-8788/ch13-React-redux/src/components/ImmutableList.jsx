import { List } from "immutable";
import React, { useState } from "react";

const ImmutableList = () => {
  const [list, setList] = useState(List([1, 2, 3, 4]));

  const addEleven = () => {
    setList(list.push(11));
  };

  return (
    <div>
      {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}

      <button onClick={() => addEleven()}> add 11 </button>
    </div>
  );
};

export default ImmutableList;
