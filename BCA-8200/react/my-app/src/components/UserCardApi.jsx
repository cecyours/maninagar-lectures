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

      const arrayData = Array.isArray(data)
        ? data
        : Object.keys(data).length === 0
        ? []
        : [data];

      setUserData(arrayData);
    } catch (error) {
      console.log(error);
      setUserData([]);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [count]);

  return (
    <div className="p-4">
      {userData.length === 0 ? (
        <h1>Data Not Found</h1>
      ) : (
        userData.map((data, index) => (
          <div
            key={data.id}
            className="border border-secondary my-4 rounded-3 p-3"
          >
            <h1>{data.id}</h1>

            <p>{data.email}</p>
          </div>
        ))
      )}

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
