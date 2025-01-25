import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name, age, isLoggedIn }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired, // 'name' must be a string and is required
  age: PropTypes.number,            // 'age' must be a number
  isLoggedIn: PropTypes.bool,       // 'isLoggedIn' must be a boolean
};

Greeting.defaultProps = {
  age: 18, // Default age if not provided
  isLoggedIn: false, // Default logged-in status
};

export default Greeting;
