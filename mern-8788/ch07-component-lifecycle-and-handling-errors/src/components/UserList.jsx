import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
  const api = "https://randomuser.me/api?results=100";
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const reponse = await axios.get(api);
      const data = reponse.data.results.map((d) => {
        return {
          fullName: `${d.name.first} ${d.name.last}`,
          picture: d.picture.large,
        };
      });

      setUsers(data);
    } catch (error) {
        console.error({error})
    }
    finally{
        console.log("data loaded")
    }
  };
  return (
    <div>
      {users.map((user,i) => (
        <div key={i} className="d-flex gap-2">
            <img src={user.picture} alt="kk" width={40} />
            {user.fullName}
        </div>
      ))}
    </div>
  );
}

export default UserList;
