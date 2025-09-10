import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const username = "Vishu"; // can be dynamic later
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        {/* Left Spacer */}
        <div className="d-flex flex-grow-1"></div>

        {/* Brand Logo in Center */}
        <Link
          className="navbar-brand mx-auto fw-bold fs-4 d-flex align-items-center"
          to="/"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top me-2"
          />
          MyBrand
        </Link>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side Username */}
        <div className="d-flex flex-grow-1 justify-content-end  align-items-center gap-2">
          <button
            type="button"
            class="btn btn-sm btn-primary position-relative"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            Cart
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalQuantity}
            </span>
          </button>
          <span className="navbar-text fw-semibold">Hello, {username}</span>
        </div>

        <div
          className="offcanvas offcanvas-start"
          data-bs-backdrop="static"
          tabIndex="-1"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="staticBackdropLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div>I will not close if you click outside of me.</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
