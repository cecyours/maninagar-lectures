import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-4 mt-5 shadow-sm">
      <div className="container text-center">
        {/* Brand Logo */}
        <div className="mb-3 d-flex justify-content-center align-items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <h5 className="fw-bold mb-0">MyBrand</h5>
        </div>

        {/* Quick Links */}
        <ul className="list-inline mb-3">
          <li className="list-inline-item mx-2">
            <Link to="/" className="text-decoration-none text-dark">
              Home
            </Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link to="/products" className="text-decoration-none text-dark">
              Products
            </Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link to="/contact" className="text-decoration-none text-dark">
              Contact Us
            </Link>
          </li>
          <li className="list-inline-item mx-2">
            <Link to="/about" className="text-decoration-none text-dark">
              About Us
            </Link>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-muted small mb-0">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
