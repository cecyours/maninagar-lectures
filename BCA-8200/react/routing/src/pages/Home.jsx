import React from "react";
import useCustState from "../hooks/useCustState";

const Home = () => {
  const [state, setCustState] = useCustState("mine");

  return (
    <div>
      This is Home page
      {state}
    </div>
  );
};

export default Home;
