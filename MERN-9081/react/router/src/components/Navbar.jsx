import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#4caf50",
      }}
    >
        <Link
            rel="stylesheet"
            to="/"
            style={{ margin: "0 15px", color: "white", textDecoration: "none" }}
        >
            Home
        </Link>
        <Link
        rel="stylesheet"
        to="/about"
        style={{ margin: "0 15px", color: "white", textDecoration: "none" }}
        >
            About
        </Link>
        <Link
            rel="stylesheet"
            to="/contact"
            style={{ margin: "0 15px", color: "white", textDecoration: "none" }}
        >
            Contact
        </Link>
    </nav>
  );
}

export default Navbar;
