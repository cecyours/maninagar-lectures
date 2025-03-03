import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaLocationPin, FaMapLocation } from "react-icons/fa6";

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
        `https://randomuser.me/api?page=${currentPage}&results=10`
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
      <div className="row">
        {users.map((user, i) => (
          <div key={i} className="col-md-6">
            <div className="row shadow-sm rounded-3 p-2 m-2 border border-warning">
              <div className="col-md-2">
                <img
                  width={80}
                  height={80}
                  src={`${user.picture.large}`}
                  alt={`${user.name.first}-${user.name.last}`}
                  style={{ borderRadius: "50%" }}
                  className="border border-warning p-1 bg-warning"
                />
              </div>
              <div className="col-md-10">
                <div className="">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-3">{user.name.title}{user.name.first} {user.name.last}</div>
                    <div>
                      <div>{user.email}</div>
                      <div className="text-end text-sm">{new Date(user.dob.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div className="d-flex gap-2 align-items-center text-muted mt-2 fs-6">
                    <FaLocationPin className="text-warning" />
                    <span className="text-sm">
                      {user.location.street.number},{user.location.street.name},
                      {user.location.city},{user.location.state},
                      {user.location.country},{user.location.postcode}.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {error && (
        <div className="border border-danger p-2 text-danger">{error}</div>
      )}
    </div>
  );
}

export default Users;
