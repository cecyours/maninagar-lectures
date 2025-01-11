import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const items = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Contact Us", url: "/contact" },
  ];

  return (
    <nav className="d-flex nav-bar gap-3 bg-danger p-2">
      {items.map((item, index) => (
        <li key={index} className="nav-link border  px-2 py-1 bg-white">
          <Link to={`${item.url}`}>{item.title}</Link>
        </li>
      ))}
    </nav>
  );
}

export default Header;
