import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increaseQuantity, decreaseQuantity } from "../redux/cartSlice";

const Navbar = () => {
  const username = "Vishu"; // can be dynamic later
  const { totalQuantity, cartItems, totalAmount } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  // Calculate additional charges
  const deliveryCharge = 25;
  const handlingCharge = 2;

  const grandTotal = totalAmount + deliveryCharge + handlingCharge;

  grandTotal.toFixed(2);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg ">
        <div className="container-fluid px-4">
          {/* Brand Logo */}
          <Link
            className="navbar-brand fw-bold fs-3 d-flex align-items-center text-white"
            to="/"
          >
            <img
              src={"/onemartwhite.png"}
              alt="Logo"
              width="60"
              height="35"
              className="d-inline-block align-text-top me-2 rounded"
            />
            One Mart
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-white fw-semibold px-3 py-2 rounded transition-all"
                  to="/"
                >
                  <i className="bi bi-house me-1"></i>Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-white fw-semibold px-3 py-2 rounded transition-all"
                  to="/products"
                >
                  <i className="bi bi-grid me-1"></i>Products
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-white fw-semibold px-3 py-2 rounded transition-all"
                  to="/contact"
                >
                  <i className="bi bi-telephone me-1"></i>Contact Us
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link text-white fw-semibold px-3 py-2 rounded transition-all"
                  to="/about"
                >
                  <i className="bi bi-info-circle me-1"></i>About Us
                </Link>
              </li>
            </ul>

            {/* Right Side Cart and User */}
            <div className="d-flex align-items-center gap-3">
              <button
                type="button"
                className="btn btn-warning fw-semibold position-relative px-3 py-2 rounded-pill"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <i className="bi bi-cart3 me-1"></i>Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalQuantity}
                </span>
              </button>
              <div className="d-flex align-items-center text-white">
                <i className="bi bi-person-circle me-2 fs-5"></i>
                <span className="fw-semibold">Hello, {username}</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ width: "400px" }}
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
            My Cart ({totalQuantity})
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          {cartItems.length === 0 ? (
            <div className="text-center p-4">
              <p className="text-muted">
                Your cart is empty. Add something to cart
              </p>
            </div>
          ) : (
            <div className="d-flex flex-column h-100">
              {/* Cart Items */}
              <div
                className="flex-grow-1 p-3"
                style={{
                  overflowY: "auto",
                  minHeight: "300px",
                  maxHeight: "400px",
                }}
              >
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex align-items-center mb-3 p-2 border rounded"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="rounded me-3"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1 fw-bold">{item.title}</h6>

                      <div className="fw-bold text-success">₹{item.price}</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-sm btn-outline-success rounded-circle"
                        style={{ width: "30px", height: "30px" }}
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>
                      <span className="mx-2 fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-success rounded-circle"
                        style={{ width: "30px", height: "30px" }}
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bill Details */}
              <div className="p-3 border-top">
                <h6 className="fw-bold mb-3">Bill details</h6>
                <div className="d-flex justify-content-between mb-2">
                  <span>
                    <i className="bi bi-list me-1"></i>
                    Items total
                  </span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>
                    <i className="bi bi-truck me-1"></i>
                    Delivery charge
                    <i className="bi bi-info-circle ms-1 text-muted"></i>
                  </span>
                  <span>₹{deliveryCharge}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>
                    <i className="bi bi-bag me-1"></i>
                    Handling charge
                    <i className="bi bi-info-circle ms-1 text-muted"></i>
                  </span>
                  <span>₹{handlingCharge}</span>
                </div>

                <hr />
              </div>

              {/* Footer Action Button */}
              <div className="p-3 bg-success text-white">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-bold">₹{grandTotal.toFixed(2)}</div>
                    <small>TOTAL</small>
                  </div>
                  <button className="btn btn-light text-dark fw-bold">
                    Procces To Checkout <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
