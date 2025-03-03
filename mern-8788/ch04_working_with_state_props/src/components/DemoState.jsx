import React, { useState } from "react";

function DemoState() {
  let k = "Neha";
  const [user, changeUser] = useState(k);
  const btnClick = () => {
    k = "Denver";
    console.log(k);
    changeUser(k);
  };
  return (
    <>
      <h1>
        Demo State | {k}, {user}
      </h1>
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            recusandae alias commodi, inventore aut enim quae rem facere
            doloremque sapiente neque unde facilis eaque sunt suscipit
            veritatis, cupiditate temporibus ducimus?
          </p>
        </div>
        <div>
          <button onClick={btnClick}>Change the name</button>
        </div>
      </div>
    </>
  );
}

export default DemoState;
