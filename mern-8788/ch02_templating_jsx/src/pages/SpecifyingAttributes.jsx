import React from "react";
import Information from "../components/Information";

function SpecifyingAttributes() {
  const handleMyClick = () => {
    console.log("click 1 !!");
  };

  const handleYourClick = () => {
    console.log("click 2 !!");
  };
  const handleYouClick = () => {
    console.log("click 3 !!");
  };
  return (
    <div>
      <Information
        onClick={handleMyClick}
        className={"bg-danger p-2 rounded-3"}
        innerComponent={
          "<p class='bg-white border rounded-3 m-2 p-2 '>Hello World</p>"
        }
      />

      <Information
        onClick={handleYourClick}
        className={"bg-warning p-2 rounded-3 mt-3"}
        innerComponent={
          "<p class='bg-white border rounded-3 m-2 p-2 '>Hello World</p>"
        }
      />

      <Information
        onClick={handleYouClick}
        className={"bg-warning  rounded-5 mt-4"}
        innerComponent={
          "<p class='bg-white border rounded-3 m-2 p-2 '>Hello</p>"
        }
      />
    </div>
  );
}

export default SpecifyingAttributes;
