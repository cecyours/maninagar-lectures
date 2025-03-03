import React, { useRef, useState } from "react";

function TypesOfComponents() {
  const [var1, setVar1] = useState(5);
  const var2 = useRef(null); 

  return (
    <div>
       <div className="row">
        <div className="col-md-6">
          <h2>Controlled</h2>
          <div>
            <input
              type="text"
              value={var1}
              onChange={(e) => {
                setVar1(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2>UnControlled</h2>
          <div>
            <input type="text" className="form-control" ref={var2} />
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          console.log("Uncontrolled input value:", var2.current.value);
          console.log("controlled input value:", var1);
        }}
      >
        Log Value
      </button>
    </div>
  );
}

export default TypesOfComponents;
