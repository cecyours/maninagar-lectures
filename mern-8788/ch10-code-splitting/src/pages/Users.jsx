import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `https://randomuser.me/api?page=${currentPage}&results=20`
      );
      console.log({ response });
      if (response.status === 200) {
        setUsers(response.data.results);
      } else {
        setError("Something wrong");
      }
    } catch (error) {
      console.log({ error });
      setError(error.message);
    }
  };
  return (
    <div>
      {users.map((user, i) => (
        <div key={i} className="m-2 bg-info rounded-3 p-2">
          <div className="row "> 
            <div className="col-md-2">
                <img src={`${user.picture.large}`} alt={`${user.name.first}-${user.name.last}`} style={{borderRadius:"50%"}} />
            </div>
            <div className="col-md-10">{user.name.first}</div>
          </div>
        </div>
      ))}
      {error && (
        <div className="border border-danger p-2 text-danger">{error}</div>
      )}
    </div>
  );
}

export default Users;
