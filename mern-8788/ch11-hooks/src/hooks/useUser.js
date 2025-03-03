import { useState } from "react";

export function useUser() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const updateUser = ( newUser ) => {
    setUser(newUser);
    
    localStorage.setItem("user", JSON.stringify(newUser)); // Store as string
  };

  return { user, setUser,updateUser };
}
