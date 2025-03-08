import React from "react";

const UserCard = ({ username, email }) => {
  return (
    <div>
      <h1> Username : {username}</h1>
      <p> Email : {email}</p>
    </div>
  );
};

export default UserCard;
