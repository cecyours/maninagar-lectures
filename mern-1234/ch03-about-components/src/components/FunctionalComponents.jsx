import React from "react";
import PropTypes from "prop-types";

const FunctionalComponents = ({ name = "Mine", age = 34 }) => {
  return (
    <div>
      <h1>
        This is Functional Components {name} , {age}
      </h1>
    </div>
  );
};

FunctionalComponents.prototype = {
  name: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
};

export default FunctionalComponents;
