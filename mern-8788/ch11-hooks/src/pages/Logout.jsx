import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";

function Logout() {
  const { user, updateUser } = useUser();

  useEffect(() => {
    updateUser(null);
  }, []);
  
  return <div>{user ? "logged in" : "Logged Out"}</div>;
}

export default Logout;
