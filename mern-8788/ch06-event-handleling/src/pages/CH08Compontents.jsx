import React, { useState } from "react";
import TypesOfComponents from "../components/TypesOfComponents";

function CH08Compontents() {
  const [renderKey, setRenderKey] = useState(0);
  return (
    <div>
      <button
        className="form-control btn btn-primary"
        onClick={() => {
          setRenderKey((r) => r + 1);
        }}
      >
        Regeration
      </button>
      <div>
        <TypesOfComponents key={renderKey} />
      </div>
    </div>
  );
}

export default CH08Compontents;
