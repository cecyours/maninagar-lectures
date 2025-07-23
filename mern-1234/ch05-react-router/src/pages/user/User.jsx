import React from "react";
import UserData from "../../json/user.json";

const User = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row g-4">
        {UserData.map((user, index) => (
          <div className="col-md-4 col-lg-3" key={index}>
            <div className="card shadow-sm border-0 ">
              <img
                src={user.profile}
                className="card-img-top rounded-top"
                alt={`${user.first_name} ${user.last_name}`}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {user.first_name} {user.last_name}
                </h5>
                <p className="card-text text-muted">{user.job}</p>
                <p className="card-text small">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="card-text small">
                  <strong>Phone:</strong> {user.phone_number}
                </p>
                <span
                  className={`badge bg-${
                    user.gender === "Male" ? "primary" : "danger"
                  }`}
                >
                  {user.gender}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
