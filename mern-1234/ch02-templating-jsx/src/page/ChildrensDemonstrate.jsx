import React from "react";
import DemoDiv from "../components/DemoDiv";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";

function ChildrensDemonstrate() {
  return (
    <div>
      <DemoDiv
        heading="Hello World"
        myImg={<img src={img1} width={200} height={200} />}
      >
        <h2>Iron Man</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          est tempora illum quos cumque minima veritatis odio corporis soluta
          obcaecati, vitae assumenda quo possimus itaque, voluptas inventore
          maiores, accusantium laudantium!
        </div>
        xyz
      </DemoDiv>
      <hr />
      <DemoDiv
        heading="Hello World 2"
        myImg={<img src={img2} width={200} height={200} />}
      >
        <h2>Iron Man 2</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          est tempora illum quos cumque minima veritatis odio corporis soluta
          obcaecati, vitae assumenda quo possimus itaque, voluptas inventore
          maiores, accusantium laudantium!
        </div>
        power
      </DemoDiv>
    </div>
  );
}

export default ChildrensDemonstrate;
