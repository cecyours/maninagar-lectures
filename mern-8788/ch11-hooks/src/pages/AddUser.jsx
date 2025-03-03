import React, { useState } from "react";
import { useUser } from "../hooks/useUser";

function AddUser() {
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user?.name);
  const [marks, setMarks] = useState(user?.marks);
  return (
    <div>
      <h1>AddUser</h1>
      <div className="gap-2 d-flex">
        <input
          className="form-control"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="user name"
        />
        <input
          className="form-control"
          value={marks}
          onChange={(e) => {
            setMarks(e.target.value);
          }}
          placeholder="user marks"
        />
        <button
          onClick={() => {
            updateUser({ name, marks });
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddUser;
