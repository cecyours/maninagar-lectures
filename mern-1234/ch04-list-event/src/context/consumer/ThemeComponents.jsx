import React from "react";
import ThemeContext from "../ThemeContext";

function ThemeComponents() {
  return (
    <ThemeContext.Consumer>
      {(value) => <div>Theme: {value}</div>}
    </ThemeContext.Consumer>
  );
}

export default ThemeComponents;
