import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="img-fluid rounded shadow"
            alt="About Us"
          />
        </div>

        {/* Content Section */}
        <div className="col-md-6">
          <h1 className="display-5 fw-bold text-primary mb-3">About Us</h1>
          <p className="lead text-muted">
            Welcome to <strong>Our Company</strong> — your one-stop solution for
            innovative and modern digital experiences. We’re passionate about
            creating clean, user-friendly, and high-performance applications.
          </p>
          <p>
            Our mission is to empower businesses with technology that enhances
            customer engagement and boosts productivity. We believe in combining
            creativity, functionality, and strategy to deliver exceptional
            results.
          </p>

          <button className="btn btn-primary btn-lg mt-3">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
