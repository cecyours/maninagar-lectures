import React, { Children } from "react";

function CustomSection({ name, children }) {
  return (
    <div className="bg-danger p-2">
      <div className="row gap-2 mt-3 p-2 bg-white">
        <div className="col-md-6 border">
          <h1 className="bg-danger m-2 text-white">{name}</h1>
          {children}
        </div>
        <div className="col-md-5 border">
          <h2>Property</h2>
          {Children.count(children)}
        </div>
      </div>
    </div>
  );
}

export default CustomSection;
