import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeFromCart } from "../redux/cartSlice";

const Navbar = () => {
  const username = "Vishu"; // can be dynamic later
  const { totalQuantity, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
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
              className="btn btn-sm btn-primary position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              Cart
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalQuantity}
              </span>
            </button>
            <span className="navbar-text fw-semibold">Hello, {username}</span>
          </div>
        </div>
      </nav>

      <div
        class="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          {cartItems.length === 0 ? (
            <p>You cart is empty . Add something in Cart</p>
          ) : (
            <div>
              <ul className="list-group">
                {cartItems.map((item) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center ">
                    <div>
                      {item.title} {item.price} X {item.quantity} ={" "}
                      {item.totalPrice}
                    </div>
                    <div>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        X
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => dispatch(clearCart())}
              >
                {" "}
                Clear
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
