import React from "react";

const MyComp = (props) => {
  //   const myObj = {
  //     name: "Sania",
  //     course: "MERN",
  //     location: "Ahmedabad",
  //     state: "Gujarat",
  //   };

  //   //destruct properly from object
  //   const { name, course, state } = myObj;

  //   console.log(course);
  //   console.log(name);

  //   console.log(myObj.location);
  //   console.log(state);

  return (
    <div>
      I am {props.name} from {props.location} and my course is {props.course}
    </div>
  );
};

export default MyComp;
