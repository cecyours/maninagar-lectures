import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-5">
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src="https://via.placeholder.com/50"
                alt="Logo"
                width="50"
                height="50"
                className="me-3 rounded"
              />
              <h4 className="fw-bold mb-0 text-white">One Mart</h4>
            </div>
            <p className="text-light mb-4">
              Your trusted partner for quality products and exceptional service.
              We're committed to providing the best shopping experience.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-warning btn-sm rounded-circle">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-warning btn-sm rounded-circle">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="btn btn-warning btn-sm rounded-circle">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-warning btn-sm rounded-circle">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">
                  <i className="bi bi-house me-2"></i>Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/products"
                  className="text-light text-decoration-none"
                >
                  <i className="bi bi-grid me-2"></i>Products
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">
                  <i className="bi bi-info-circle me-2"></i>About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none">
                  <i className="bi bi-telephone me-2"></i>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-4">Support</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-truck me-2"></i>Shipping
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-arrow-return-left me-2"></i>Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-shield-check me-2"></i>Privacy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  <i className="bi bi-headset me-2"></i>Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-4">Stay Updated</h5>
            <p className="text-light mb-4">
              Subscribe to our newsletter for latest updates and offers.
            </p>
            <div className="input-group mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-warning" type="button">
                <i className="bi bi-envelope"></i>
              </button>
            </div>
            <div className="text-light">
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-geo-alt text-white me-3"></i>
                <small>123 Business St, City, State 12345</small>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-telephone text-white me-3"></i>
                <small>+1 (555) 123-4567</small>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope text-white me-3"></i>
                <small>info@One Mart.com</small>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <hr className="my-4 border-light" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light mb-0">
              © {new Date().getFullYear()} One Mart. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <i className="bi bi-credit-card text-white fs-4"></i>
              <i className="bi bi-paypal text-white fs-4"></i>
              <i className="bi bi-apple text-white fs-4"></i>
              <i className="bi bi-google text-white fs-4"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
