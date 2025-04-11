import React, { useEffect, useState } from "react";

function HooksComponents() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    // console.log("I am here to show changes" + " " + count);

    document.title = `Title ${count}`;

  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me </button>
      {count}
    </div>
  );
}

export default HooksComponents;

