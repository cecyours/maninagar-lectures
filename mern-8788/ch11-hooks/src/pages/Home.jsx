import React, { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

function Home() {
  const { user, setUser,updateUser } = useUser();
  const [number, setNumber] = useState(0);
  const [colorClass, setColorClass] = useState("bg-danger");

  const handleNumberChange = () => {
    setNumber(parseInt(Math.random() * 10));
    //
  };

  useEffect(() => {
    if (number % 2 == 0) {
      setColorClass("bg-success");
    } else {
      setColorClass("bg-danger");
    }
    console.log("i am called.");
  }, [number]);
  return (
    <div className="border p-2 border-danger">
      <h1>Hello World {user?.name}</h1>
      <div className="d-flex gap-2 justify-content-between">
        <div className="bg-primary p-2 border text-white rounded-3">
          <h2>Use State</h2>
          {number}
        </div>

        <div className="bg-primary p-2 border text-white rounded-3">
          <h2>input</h2>
          <button
            className="btn btn-danger"
            onClick={() => {
              setNumber((n) => n + 1);
              updateUser({ name: "Anil Bhai", marks: 209 });
            }}
          >
            +
          </button>

          <button className="btn btn-danger" onClick={handleNumberChange}>
            Change Number
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              setNumber((n) => n - 1);
            }}
          >
            -
          </button>
        </div>

        <div className={`${colorClass} p-2 border text-white rounded-3`}>
          <h2>Use State</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
