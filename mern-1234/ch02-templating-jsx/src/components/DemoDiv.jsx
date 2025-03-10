import React from "react";

function DemoDiv({ heading,kids, ...props }) {
  return <div>{heading}{kids}</div>;
}

export default DemoDiv;
