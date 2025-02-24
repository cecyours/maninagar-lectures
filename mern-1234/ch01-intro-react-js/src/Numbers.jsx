import React from "react";

function Numbers() {
  const numbers = Array.from({ length: 100000 }).map((e) => {
    return 45;
  });

  return (
    <div>

        {/* map.((value,index)) */}
      {numbers.map((n, i) => (
        <div key={i} style={{ background: "#ccc",margin:"10px", padding:"10px"}}>
          {n},{i}
        </div>
      ))}
    </div>
  );
}

export default Numbers;
