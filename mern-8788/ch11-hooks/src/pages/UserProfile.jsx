import React from "react";
import { useUser } from "../hooks/useUser";

function UserProfile() {
  const { user } = useUser();

  if (!user) return <>Please Login</>;
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

export default UserProfile;
