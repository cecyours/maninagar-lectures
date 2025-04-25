// src/components/UserComponents.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserRequest, removeUserRequest } from "../redux/user/userSlice";

const UserComponents = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  const [name, setName] = useState("");

  const handleAddUser = () => {
    if (!name.trim()) return;
    dispatch(addUserRequest({ name }));
    setName("");
  };

  const handleRemoveUser = (id) => {
    dispatch(removeUserRequest(id));
  };

  return (
    <div className="container">
      <h2>👤 User List</h2>
      {loading && <div className="loader-overlay"></div>}{" "}
      {/* Full-screen loader */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button
              className="remove"
              onClick={() => handleRemoveUser(user.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddUser} style={{ marginLeft: "10px" }}>
          ➕ Add User
        </button>
      </div>
    </div>
  );
};

export default UserComponents;
