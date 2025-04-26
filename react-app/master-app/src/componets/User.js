import axios from "axios";
import React, { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log({ users: data.data });
    setUsers(data.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Users</h2>

      {users.map((user, i) => (
        <div className="mt-4">
            {i+1} : 
            {user.username}
            {user.email}
        </div>
      ))}
    </div>
  );
}

export default User;
