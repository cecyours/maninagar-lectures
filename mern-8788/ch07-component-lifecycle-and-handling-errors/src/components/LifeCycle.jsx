import React, { useEffect, useState } from "react";

function LifeCycle() {
  const [count, setCount] = useState(1);
  console.log("ph1 : lorem");
  useEffect(() => {
    const handleClick = () => {
      console.log("i am loaded...");
    };
    document.addEventListener("click", handleClick);
    console.log("ph2 : mounted");
    return () => {
     document.removeEventListener("click", handleClick);
      console.log("ph3 : unmounted");
   };
  }, [count]);
  return (
    <div>
      <div>
        <div>{count} | </div>
        <button
          className="btn btn-primary"
          onClick={() => {
            const x = Math.random() * 10;
            setCount(x);
          }}
        >
          Random Number
        </button>
      </div>
    </div>
  );
}

export default LifeCycle;
