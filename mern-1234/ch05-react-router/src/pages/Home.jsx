import React, { useEffect } from "react";

const Home = ({ user }) => {
  useEffect(() => {
    async function fetchUser() {
      const user = await fetch("http://localhost:9000/users");
      console.log(await user.json());
    }

    fetchUser();
  }, []);

  return (
    <div>
      <h1 className="text-center fs-3 mt-3 text-uppercase">
        Logged in user id {user}
      </h1>
    </div>
  );
};

export default Home;
