import React from "react";
import { useParams } from "react-router";

const UserComments = () => {
  const { id } = useParams();

  console.log(id);

  return <div>this is for all comments of user {id}</div>;
};

export default UserComments;
