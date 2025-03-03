import React from "react";
import MascevButton from "../components/MascevButton";

function DemoButtons() {
  const handleClick = () => {
    console.log("Button Clicked 1");
  };
  const handleWClick = () => {
    console.log("Button Clicked 2");
  };
  return (
    <div>
      <h1>Compontens Buttons</h1>

      <div className="gap-2 d-flex">
        <MascevButton className="btn btn-primary" clickEvent={handleClick}>
          Primary
        </MascevButton>
        <MascevButton className="btn btn-warning" clickEvent={handleWClick}>Warning</MascevButton>
      </div>
    </div>
  );
}

export default DemoButtons;
