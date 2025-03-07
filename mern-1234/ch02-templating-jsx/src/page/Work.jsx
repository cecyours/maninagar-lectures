import React from "react";
import User from "../components/User";

function Work() {
  return (
    <div>
      <User
        name={"GK"}
        prof={"Developer"}
        className="bg-danger d-flex justify-content-between px-3 border rounded-3 p-2"
      />
      <User
        name={"Mahi"}
        prof={"Teacher"}
        className="d-flex bg-secondary justify-content-between px-3 border rounded-3 p-2"
      />

      <User
        name={"Sita"}
        prof={"Player"}
        onClick={() => {
          console.log("i am clicked");
        }}
        className="d-flex justify-content-between px-3 border rounded-3 p-2"
      />
    </div>
  );
}

export default Work;
