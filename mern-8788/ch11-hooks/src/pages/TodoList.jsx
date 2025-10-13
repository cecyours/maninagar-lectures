import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple To-Do List</h1>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {list.map((item, index) => (
          <li key={index} style={{ marginTop: "5px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
