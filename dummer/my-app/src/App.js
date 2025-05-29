import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [value, setValue] = useState("dkk");
  const [tasks, setTasks] = useState(["Apple", "Banana"]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <input
            value={value}
            className="form-control"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyUp={(e) => {
              console.log({ e: e.key });
              if (e.key == "Enter") {
                setTasks((prev) => [value,...prev]);
                setValue("");
              }
            }}
          />
        </div>
        <div className="col-md-6">
          {tasks.map((task, i) => (
            <div className="">{task}</div>
          ))}
        </div>
      </div>
      {value}
    </div>
  );
}

export default App;
