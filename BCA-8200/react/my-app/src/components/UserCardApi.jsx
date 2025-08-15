import React, { useEffect, useState } from "react";

const UserCardApi = () => {
  const [userData, setUserData] = useState([]);

  const [count, setCount] = useState(1);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${count}`
      );
      const data = await response.json();
      console.log(data);

      setUserData([data]);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    fetchUserData();
  }, [count]);

  return (
    <div className="p-4">
      {userData.map((data, index) => (
        <div
          key={data.id}
          className="border border-secondary my-4 rounded-3 p-3"
        >
          <h1>{data.id}</h1>

          <p>{data.email}</p>
        </div>
      ))}

      <button
        onClick={() => setCount(count - 1)}
        className="btn btn-secondary me-5"
      >
        -
      </button>
      <div className="badge text-bg-danger fs-3"> {count} </div>
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-secondary ms-5"
      >
        +
      </button>
    </div>
  );
};

export default UserCardApi;
