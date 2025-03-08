import React, { useState } from "react";
import { List } from "immutable";

const ListExample = () => {
  const [items, setItems] = useState(List(["Apple", "Banana", "Cherry"]));

  const addItem = () => {
    setItems(items.push("Mango"));
  };

  const updateFirstItem = () => {
    setItems(items.set(0, "Orange"));
  };

  console.log(items);

  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>Add Mango</button>
      <button onClick={updateFirstItem}>Change First Item to Orange</button>
    </div>
  );
};

export default ListExample;
