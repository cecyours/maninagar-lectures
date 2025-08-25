import React from "react";
import { useParams } from "react-router";

const SingleUser = () => {
  const { id } = useParams();

  console.log(id);

  return <div>This is for single user page {id}</div>;
};

export default SingleUser;
