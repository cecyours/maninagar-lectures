import React from "react";
import { useParams } from "react-router";

const SingleUserComments = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div>
      This is for single user {id} comments {id}
    </div>
  );
};

export default SingleUserComments;
