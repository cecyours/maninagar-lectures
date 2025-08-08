import React from "react";

const Card = ({ data }) => {
  return (
    <>
      <div className="d-flex gap-4">
        {data.map((data, index) => (
          <div class="card" style={{ width: "18rem" }}>
            <span className="badge text-bg-success w-10 rounded-circle py-2 px-2 position-absolute end-0  mt-2 me-2 ">
              {data.logins_count}
            </span>

            <img src="logo192.png" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 class="card-title">{data.nickname}</h5>
              <p class="card-text">
                {" "}
                {data.email_verified ? "✅" : "❌"} {data.email}
              </p>
              <a href="/" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="card w-25">
        <h1>Index {1}</h1>
        <p>This is card of {1} </p>
      </div>
    </>
  );
};

export default Card;
