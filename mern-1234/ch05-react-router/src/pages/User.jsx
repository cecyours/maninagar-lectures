import React from "react";
import { Link } from "react-router-dom";
// import UserData from "../json/user.json";

const User = () => {

  

  return (
    <div className="container-fluid py-4">
      <h1>This is user page </h1>

      <Link to={"/users/vishal"}>Go to vishal's page</Link>
    </div>
  );
};

export default User;
