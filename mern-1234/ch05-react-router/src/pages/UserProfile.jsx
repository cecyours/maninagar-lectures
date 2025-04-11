import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>This is profile page of {id} </h1>
      <hr />
      <h1>This is page for view details of perticuler user</h1>
    </div>
  );
};

export default UserProfile;
