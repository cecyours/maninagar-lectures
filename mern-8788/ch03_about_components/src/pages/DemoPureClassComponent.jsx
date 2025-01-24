import React, { useState } from "react";
import PureClassComponent from "../components/PureClassComponent";

function DemoPureClassComponent() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div>
      DemoPureClassComponent
      <hr />
      <div className="d-flex gap-5">
        <div>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <PureClassComponent name={username} />
        </div>
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setUsername(name);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default DemoPureClassComponent;
