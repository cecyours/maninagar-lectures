import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
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

  const dispatch = useDispatch();

  return (
    <div className="products-page">
      {/* Page Header */}
      <section className="page-header bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h1 className="display-4 fw-bold mb-3">Our Products</h1>
              <p className="lead">Discover amazing products at unbeatable prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section py-5">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {products.map((product) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
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

                    {/* Card Body */}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fs-6 fw-bold mb-2 text-center">
                        {product.title}
                      </h5>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="h5 text-success mb-0 fw-bold">
                          ${product.price}
                        </span>
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
                            title="Add to Cart"
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
        </div>
      </section>
    </div>
  );
};

export default Product;
