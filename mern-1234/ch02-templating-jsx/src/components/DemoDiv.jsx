import React from "react";
function DemoDiv({ heading,myImg, children, ...props }) {
  return (
    <div className="row">
      <div className="col-md-3">
        {heading}
        {/* img */}
        {myImg}
      </div>
      <div className="col-md-9 bg-danger">{children}</div>
    </div>
  );
}

export default DemoDiv;
