import React from "react";
import {createPortal} from "react-dom"
function DemoCreatePortal() {
  return (
    <div>
      <div className="bg-danger">
        <div>Hello World</div>
        {createPortal(<div>Hello Kites</div>, document.body)}
      </div>
    </div>
  );
}

export default DemoCreatePortal;
