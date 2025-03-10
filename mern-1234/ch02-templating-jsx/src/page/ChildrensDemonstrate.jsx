import React from "react";
import DemoDiv from "../components/DemoDiv";

function ChildrensDemonstrate() {
  return (
    <div>
      <DemoDiv
        heading="Hello World"
        kids={
          <>
            <p>lorem</p>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae possimus non illo ab ipsa cum debitis quos sint
              temporibus fuga, facere a eligendi, fugiat qui architecto
              repellat! Minus, aperiam magni.
            </div>
          </>
        }
        
      >
        Happy Kites
      </DemoDiv>
    </div>
  );
}

export default ChildrensDemonstrate;
