import { Map } from "immutable";
import React, { useState } from "react";

const MapExample = () => {
  const [person, setPerson] = useState(Map({ name: "John", age: 32 }));

  const increaseAge = () => {
    // setPerson(person.update("age", (age) => age + 1));

    
    setPerson(person.set("age", person.get("age") + 1));
  };
  return (
    <div>
      <h2>{person.get("name")}</h2>
      <p>Age: {person.get("age")}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};

export default MapExample;
