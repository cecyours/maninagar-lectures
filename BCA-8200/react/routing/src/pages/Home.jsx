import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products?limit=8");
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Welcome to <span className="text-warning">One Mart</span>
              </h1>
              <p className="lead mb-4">
                Discover amazing products at unbeatable prices. Shop with confidence 
                and enjoy fast delivery to your doorstep.
              </p>
              <div className="d-flex gap-3">
                <Link to="/products" className="btn btn-warning btn-lg px-4">
                  Shop Now
                </Link>
                <Link to="/about" className="btn btn-outline-light btn-lg px-4">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="./hero.webp"
                alt="Hero"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold mb-3">Why Choose Us?</h2>
              <p className="lead text-muted">We provide the best shopping experience</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: "80px", height: "80px" }}>
                    <i className="bi bi-truck text-primary" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="card-title">Fast Delivery</h5>
                  <p className="card-text text-muted">
                    Get your orders delivered within 24-48 hours with our express delivery service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: "80px", height: "80px" }}>
                    <i className="bi bi-shield-check text-success" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="card-title">Secure Payment</h5>
                  <p className="card-text text-muted">
                    Your payments are 100% secure with our encrypted payment gateway.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{ width: "80px", height: "80px" }}>
                    <i className="bi bi-headset text-warning" style={{ fontSize: "2rem" }}></i>
                  </div>
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text text-muted">
                    Our customer support team is available round the clock to help you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold mb-3">Featured Products</h2>
              <p className="lead text-muted">Check out our best-selling products</p>
            </div>
          </div>
          
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {featuredProducts.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-6">
                  <div className="card h-100 shadow-sm product-card">
                    <div className="position-relative">
                      <img
                        src={product.thumbnail}
                        className="card-img-top"
                        alt={product.title}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <span className="position-absolute top-0 end-0 m-2 badge bg-success">
                        {product.brand}
                      </span>
                      <span className="position-absolute top-0 start-0 m-2 badge bg-danger">
                        {product.discountPercentage.toFixed(0)}% OFF
                      </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fs-6 fw-bold mb-2">{product.title}</h5>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="h5 text-success mb-0">${product.price}</span>
                        <div className="text-warning">
                          {"⭐".repeat(Math.floor(product.rating))}
                        </div>
                      </div>
                      <div className="mt-auto">
                        <div className="d-flex gap-2">
                          <Link
                            to={`/products/${product.id}`}
                            className="btn btn-outline-primary btn-sm flex-fill"
                          >
                            View Details
                          </Link>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => dispatch(addToCart(product))}
                          >
                            <i className="bi bi-cart-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-primary btn-lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div className="h2 fw-bold text-warning">1000+</div>
              <div className="h6">Happy Customers</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="h2 fw-bold text-warning">500+</div>
              <div className="h6">Products</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="h2 fw-bold text-warning">50+</div>
              <div className="h6">Cities</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="h2 fw-bold text-warning">24/7</div>
              <div className="h6">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h3 className="fw-bold mb-3">Stay Updated</h3>
              <p className="text-muted mb-4">
                Subscribe to our newsletter and get the latest updates on new products and offers.
              </p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary btn-lg" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
