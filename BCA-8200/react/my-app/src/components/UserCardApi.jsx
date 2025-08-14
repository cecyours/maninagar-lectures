import React, { useState } from "react";

const UserCardApi = () => {
  const [userData, setUserData] = useState([]);

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchUserData();

  return <div></div>;
};

export default UserCardApi;
