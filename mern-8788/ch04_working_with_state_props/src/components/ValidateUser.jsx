import React from "react";
import PropTypes from "prop-types";

const ValidateUser = (props) => {
  return <div>Welcome, {props.username}</div>;
};

ValidateUser.propTypes = {
  username: PropTypes.number.isRequired,
};

ValidateUser.defaultProps={
  password:"kites"
}

export default ValidateUser;
