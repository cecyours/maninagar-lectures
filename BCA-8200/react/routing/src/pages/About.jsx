import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">About One Mart</h1>
              <p className="lead mb-4">
                We are passionate about providing quality products and exceptional service 
                to our customers. Our mission is to make shopping convenient, affordable, 
                and enjoyable for everyone.
              </p>
              <div className="d-flex gap-3">
                <div className="text-center">
                  <h3 className="fw-bold text-warning">500+</h3>
                  <p className="mb-0">Products</p>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold text-warning">1000+</h3>
                  <p className="mb-0">Happy Customers</p>
                </div>
                <div className="text-center">
                  <h3 className="fw-bold text-warning">50+</h3>
                  <p className="mb-0">Cities</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/hero.webp"
                alt="About One Mart"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold text-primary mb-4">Our Story</h2>
              <p className="lead text-muted mb-5">
                Founded in 2020, One Mart started as a small local business with a big dream: 
                to revolutionize the way people shop online. What began as a simple idea has 
                grown into a trusted platform serving thousands of customers nationwide.
              </p>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: "80px", height: "80px" }}>
                        <i className="bi bi-lightbulb text-primary" style={{ fontSize: "2rem" }}></i>
                      </div>
                      <h5 className="card-title">Innovation</h5>
                      <p className="card-text text-muted">
                        We constantly innovate to bring you the latest products and shopping experiences.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: "80px", height: "80px" }}>
                        <i className="bi bi-heart text-success" style={{ fontSize: "2rem" }}></i>
                      </div>
                      <h5 className="card-title">Passion</h5>
                      <p className="card-text text-muted">
                        Our passion for customer satisfaction drives everything we do.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body text-center p-4">
                      <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{ width: "80px", height: "80px" }}>
                        <i className="bi bi-award text-warning" style={{ fontSize: "2rem" }}></i>
                      </div>
                      <h5 className="card-title">Excellence</h5>
                      <p className="card-text text-muted">
                        We strive for excellence in every product and service we provide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <i className="bi bi-bullseye text-primary" style={{ fontSize: "3rem" }}></i>
                  </div>
                  <h3 className="text-center text-primary mb-4">Our Mission</h3>
                  <p className="text-muted text-center">
                    To provide our customers with high-quality products at competitive prices, 
                    delivered with exceptional service and convenience. We believe that everyone 
                    deserves access to great products and a seamless shopping experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <i className="bi bi-eye text-primary" style={{ fontSize: "3rem" }}></i>
                  </div>
                  <h3 className="text-center text-primary mb-4">Our Vision</h3>
                  <p className="text-muted text-center">
                    To become the leading online marketplace that connects customers with 
                    the best products and services, creating a community where shopping 
                    is not just a transaction, but an enjoyable experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold text-primary mb-3">Meet Our Team</h2>
              <p className="lead text-muted">The passionate people behind One Mart</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <img
                    src="https://via.placeholder.com/150x150/007bff/ffffff?text=CEO"
                    alt="CEO"
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h5 className="card-title">John Smith</h5>
                  <p className="text-primary fw-bold">CEO & Founder</p>
                  <p className="card-text text-muted small">
                    Visionary leader with 15+ years of experience in e-commerce and retail.
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <img
                    src="https://via.placeholder.com/150x150/28a745/ffffff?text=CTO"
                    alt="CTO"
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h5 className="card-title">Sarah Johnson</h5>
                  <p className="text-primary fw-bold">Chief Technology Officer</p>
                  <p className="card-text text-muted small">
                    Tech expert responsible for our platform's innovation and security.
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <i className="bi bi-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <img
                    src="https://via.placeholder.com/150x150/dc3545/ffffff?text=CMO"
                    alt="CMO"
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h5 className="card-title">Mike Davis</h5>
                  <p className="text-primary fw-bold">Chief Marketing Officer</p>
                  <p className="card-text text-muted small">
                    Marketing strategist focused on customer engagement and brand growth.
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <img
                    src="https://via.placeholder.com/150x150/ffc107/ffffff?text=CFO"
                    alt="CFO"
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h5 className="card-title">Lisa Wilson</h5>
                  <p className="text-primary fw-bold">Chief Financial Officer</p>
                  <p className="card-text text-muted small">
                    Financial expert ensuring sustainable growth and operational efficiency.
                  </p>
                  <div className="d-flex justify-content-center gap-2">
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="btn btn-outline-primary btn-sm rounded-circle">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold text-primary mb-3">Our Values</h2>
              <p className="lead text-muted">The principles that guide everything we do</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: "100px", height: "100px" }}>
                  <i className="bi bi-people text-primary" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h5 className="fw-bold mb-3">Customer First</h5>
                <p className="text-muted">
                  Our customers are at the heart of everything we do. We listen, learn, 
                  and continuously improve to exceed their expectations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="text-center">
                <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: "100px", height: "100px" }}>
                  <i className="bi bi-shield-check text-success" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h5 className="fw-bold mb-3">Integrity</h5>
                <p className="text-muted">
                  We conduct business with honesty, transparency, and ethical practices 
                  in all our interactions and decisions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="text-center">
                <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: "100px", height: "100px" }}>
                  <i className="bi bi-lightning text-warning" style={{ fontSize: "2.5rem" }}></i>
                </div>
                <h5 className="fw-bold mb-3">Innovation</h5>
                <p className="text-muted">
                  We embrace change and continuously seek new ways to improve our 
                  products, services, and customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-4">Ready to Shop with Us?</h2>
              <p className="lead mb-4">
                Join thousands of satisfied customers and discover amazing products 
                at unbeatable prices. Start your shopping journey today!
              </p>
              <div className="d-flex justify-content-center gap-3">
                <a href="/products" className="btn btn-warning btn-lg px-4">
                  <i className="bi bi-grid me-2"></i>Browse Products
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg px-4">
                  <i className="bi bi-telephone me-2"></i>Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
