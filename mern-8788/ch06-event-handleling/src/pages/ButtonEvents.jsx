import React, { useEffect, useState } from "react";

function ButtonEvents() {
  const [clsName, setClsName] = useState(null);
  const [user, setUser] = useState();
  const handleColor = (className) => {
    setClsName(`${className} text-white rounded-3`);
  };
  const fetchUser = async () => {
    const response = await fetch(`https://randomuser.me/api`);
    const data = await response.json();
    console.log(data);
    setUser(data.results[0]);
  };
  useEffect(() => {
    fetchUser();
  }, [clsName]);
  return (
    <div>
      <div className="d-flex gap-3">
        <button
          className="btn btn-danger"
          onClick={() => {
            handleColor("bg-danger");
          }}
        >
          RED
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            handleColor("bg-success");
          }}
        >
          GREEN
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleColor("bg-primary");
          }}
        >
          BLUE
        </button>
 </div>
        <div className={`mt-3 p-2 ${clsName}`}>
        {user ? (
            <div>
            <div>
              <div> 
                <img src={`${user.picture.large}`} className="rounded-pill"/>
              </div>
              <div>{user.name.first} {user.name.last}</div>
            </div> 
           </div>
          ) : 
          (
          <>No Use Selcted</>
         )
         }
   </div>
 </div>
  );
}

export default ButtonEvents;
