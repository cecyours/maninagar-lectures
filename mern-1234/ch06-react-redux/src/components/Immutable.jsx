import { Map } from "immutable";
import React, { useState } from "react";

const Immutable = () => {
  const [user, setUser] = useState(
    Map({
      name: "CEC",
      age: 5,
    })
  );

  const handleAgeChange = () => {
    const newUser = user.update("age", (age) => age + 1);
    setUser(newUser);
  };

  const handleNameChange = () => {
    const newUser = user.set("name", "Mascev");
    setUser(newUser);
  };
  return (
    <div>
      <h1>This is Example of Immutable </h1>

      <h3> Name : {user.get("name")}</h3>

      <h5> Age : {user.get("age")}</h5>

      <button onClick={handleNameChange}>Change Name to Mascev</button>

      <br />

      <br />
      <button onClick={handleAgeChange}> increment age </button>
    </div>
  );
};

export default Immutable;
