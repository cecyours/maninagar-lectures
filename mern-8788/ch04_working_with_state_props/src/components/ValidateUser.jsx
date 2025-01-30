import React from "react";
import PropTypes from "prop-types";
import ValidatedComponent from "./ValidatedComponent";

const ValidateUser = (props) => {
  return (
    <div>
      Welcome, {props.username}
      <ValidatedComponent />
    </div>
  );
};

ValidateUser.propTypes = {
  username: PropTypes.number.isRequired,
};

ValidateUser.defaultProps = {
  password: "kites",
};

export default ValidateUser;
