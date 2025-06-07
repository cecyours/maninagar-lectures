import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const NotFound = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <div className="mb-4">
        <i
          className="bi bi-exclamation-triangle-fill text-warning"
          style={{ fontSize: "5rem" }}
        ></i>
      </div>
      <h1 className="display-4 fw-bold">404 - Page Not Found</h1>
      <p className="lead text-muted mb-4">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
