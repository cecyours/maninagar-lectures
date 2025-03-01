import React, { createElement } from "react";

function CreateElementDemo() {
  return (
    <div className="bg-info">
      {createElement(
        "div",
        null,
        "Hello World",
        createElement("h1", null, "Python")
      )}

      <hr />
      {createElement(
        "div",
        null,
        "Hello World",
        createElement("h1", null, "Python"),
        createElement("a", null, "Click me")
      )}

      {/* {createElement("h1",null,"Python")} */}
    </div>
  );
}

export default CreateElementDemo;

/* <xyz> <h1>sdkjfn</h`> </xyz> */
