import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
      setSelectedImage(response.data.thumbnail);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    alert(`${quantity} item(s) added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="container my-5">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-5">
        <div className="text-center py-5">
          <i className="bi bi-exclamation-triangle text-warning" style={{ fontSize: "4rem" }}></i>
          <h3 className="mt-3">Product Not Found</h3>
          <p className="text-muted">The product you're looking for doesn't exist.</p>
          <button className="btn btn-primary" onClick={() => navigate('/products')}>
            <i className="bi bi-arrow-left me-2"></i>Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="single-product-page">
      {/* Breadcrumb */}
      <div className="bg-light py-3">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="/" className="text-decoration-none">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/products" className="text-decoration-none">Products</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Product Images */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <img
                      src={selectedImage}
                      alt={product.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: "400px", objectFit: "contain" }}
                    />
                  </div>
                  
                  {/* Image Thumbnails */}
                  {product.images && product.images.length > 1 && (
                    <div className="d-flex justify-content-center flex-wrap gap-2">
                      {product.images.slice(0, 4).map((img, index) => (
                        <img
                          onClick={() => setSelectedImage(img)}
                          key={index}
                          src={img}
                          alt={`product-${index}`}
                          className={`img-thumbnail cursor-pointer ${selectedImage === img ? 'border-primary' : ''}`}
                          style={{ 
                            width: "80px", 
                            height: "80px", 
                            objectFit: "cover",
                            cursor: "pointer"
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="col-lg-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  {/* Product Title & Category */}
                  <div className="mb-3">
                    <span className="badge bg-primary mb-2">{product.brand}</span>
                    <h1 className="h3 fw-bold mb-2">{product.title}</h1>
                    <p className="text-muted mb-0">
                      <i className="bi bi-tag me-1"></i>{product.category}
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="mb-3">
                    <div className="d-flex align-items-center">
                      <div className="text-warning me-2">
                        {"⭐".repeat(Math.floor(product.rating))}
                      </div>
                      <span className="fw-bold">{product.rating}</span>
                      <span className="text-muted ms-2">(Based on reviews)</span>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <h2 className="text-success fw-bold mb-0 me-3">${product.price}</h2>
                      <span className="badge bg-danger fs-6">
                        {product.discountPercentage}% OFF
                      </span>
                    </div>
                    <p className="text-muted mb-0">
                      <s>${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</s>
                    </p>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <h5 className="fw-bold mb-2">Description</h5>
                    <p className="text-muted">{product.description}</p>
                  </div>

                  {/* Stock Status */}
                  <div className="mb-4">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-box-seam text-primary me-2"></i>
                      <span className="fw-bold me-2">Availability:</span>
                      {product.stock > 0 ? (
                        <span className="text-success fw-bold">
                          In Stock ({product.stock} available)
                        </span>
                      ) : (
                        <span className="text-danger fw-bold">Out of Stock</span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">Quantity:</label>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <span className="mx-3 fw-bold fs-5">{quantity}</span>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                        disabled={quantity >= product.stock}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-grid gap-2 d-md-block mb-4">
                    <button
                      className="btn btn-primary btn-lg me-2"
                      onClick={handleAddToCart}
                      disabled={product.stock === 0}
                    >
                      <i className="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                    <button
                      className="btn btn-success btn-lg"
                      onClick={handleBuyNow}
                      disabled={product.stock === 0}
                    >
                      <i className="bi bi-bag-check me-2"></i>Buy Now
                    </button>
                  </div>

                  {/* Product Features */}
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-shield-check text-success me-2"></i>
                        <small className="text-muted">Secure Payment</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-truck text-primary me-2"></i>
                        <small className="text-muted">Fast Delivery</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-arrow-return-left text-warning me-2"></i>
                        <small className="text-muted">Easy Returns</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-headset text-info me-2"></i>
                        <small className="text-muted">24/7 Support</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <ul className="nav nav-tabs" id="productTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="specifications-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#specifications"
                        type="button"
                        role="tab"
                      >
                        <i className="bi bi-list-ul me-2"></i>Specifications
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#reviews"
                        type="button"
                        role="tab"
                      >
                        <i className="bi bi-star me-2"></i>Reviews
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="shipping-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#shipping"
                        type="button"
                        role="tab"
                      >
                        <i className="bi bi-truck me-2"></i>Shipping
                      </button>
                    </li>
                  </ul>
                  
                  <div className="tab-content mt-4" id="productTabsContent">
                    {/* Specifications Tab */}
                    <div className="tab-pane fade show active" id="specifications" role="tabpanel">
                      <div className="row">
                        <div className="col-md-6">
                          <table className="table table-borderless">
                            <tbody>
                              <tr>
                                <td className="fw-bold">Brand:</td>
                                <td>{product.brand}</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Category:</td>
                                <td>{product.category}</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Rating:</td>
                                <td>{product.rating} ⭐</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Stock:</td>
                                <td>{product.stock} units</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-6">
                          <table className="table table-borderless">
                            <tbody>
                              <tr>
                                <td className="fw-bold">Discount:</td>
                                <td>{product.discountPercentage}% off</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Warranty:</td>
                                <td>{product.warrantyInformation || "1 Year"}</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Return Policy:</td>
                                <td>{product.returnPolicy || "30 Days"}</td>
                              </tr>
                              <tr>
                                <td className="fw-bold">Shipping:</td>
                                <td>{product.shippingInformation || "Free shipping"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* Reviews Tab */}
                    <div className="tab-pane fade" id="reviews" role="tabpanel">
                      {product.reviews?.length > 0 ? (
                        <div className="row">
                          {product.reviews.map((review, index) => (
                            <div key={index} className="col-md-6 mb-3">
                              <div className="card border-0 bg-light">
                                <div className="card-body">
                                  <div className="d-flex justify-content-between align-items-start mb-2">
                                    <h6 className="card-title mb-0">{review.reviewerName}</h6>
                                    <small className="text-muted">
                                      {new Date(review.date).toLocaleDateString()}
                                    </small>
                                  </div>
                                  <div className="text-warning mb-2">
                                    {"⭐".repeat(review.rating)}
                                  </div>
                                  <p className="card-text text-muted">{review.comment}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <i className="bi bi-chat-dots text-muted" style={{ fontSize: "3rem" }}></i>
                          <h5 className="mt-3 text-muted">No Reviews Yet</h5>
                          <p className="text-muted">Be the first to review this product!</p>
                        </div>
                      )}
                    </div>

                    {/* Shipping Tab */}
                    <div className="tab-pane fade" id="shipping" role="tabpanel">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="text-center p-3">
                            <i className="bi bi-truck text-primary" style={{ fontSize: "2rem" }}></i>
                            <h6 className="mt-2">Free Shipping</h6>
                            <p className="text-muted small">On orders over $50</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center p-3">
                            <i className="bi bi-clock text-success" style={{ fontSize: "2rem" }}></i>
                            <h6 className="mt-2">Fast Delivery</h6>
                            <p className="text-muted small">2-3 business days</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center p-3">
                            <i className="bi bi-shield-check text-warning" style={{ fontSize: "2rem" }}></i>
                            <h6 className="mt-2">Secure Packaging</h6>
                            <p className="text-muted small">Safe & secure delivery</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
