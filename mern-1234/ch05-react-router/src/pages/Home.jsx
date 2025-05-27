import React, { useEffect, useState } from "react";

const Home = ({ userprops }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchUser() {
      const user = await fetch(`http://localhost:9000/users`);
      console.log(user.json(), "here i am");
      const userData = await user.json();
      setUser(userData);
    }
    fetchUser();
  }, []);

  return (
    <div>
      <h1 className="text-center fs-3 mt-3 text-uppercase">
        Logged in user id {userprops}
      </h1>

      <div className="container">
        {user.map((user) => (
          <>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.age}</li>
          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
