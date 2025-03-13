import React from "react";

const Header = () => {
  return (
    <div className="px-4 py-2 bg-dark text-light">
      <ul className="d-flex gap-4 list-unstyled ">
        <li>Home</li>
        <li>About Us</li>
        <li> Contact Us</li>
        <li>Services</li>
      </ul>
    </div>
  );
};

export default Header;
