import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
      setSelectedImage(response.data.thumbnail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center my-5">Loading...</div>;
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="row g-0">
          {/* Left Side: Product Images */}
          <div className="col-md-5 text-center bg-light p-3">
            <img
              src={selectedImage}
              alt={product.title}
              className="img-fluid rounded"
              style={{ maxHeight: "350px", objectFit: "contain" }}
            />
            <div className="d-flex justify-content-center flex-wrap mt-3">
              {product.images?.map((img, index) => (
                <img
                  onClick={() => setSelectedImage(img)}
                  key={index}
                  src={img}
                  alt={`product-${index}`}
                  className="img-thumbnail m-1"
                  style={{ width: "70px", height: "70px", objectFit: "cover" }}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Product Details */}
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title">{product.title}</h3>
              <p className="text-muted">{product.category}</p>
              <p className="card-text">{product.description}</p>

              <h4 className="text-success">${product.price}</h4>
              <p>
                <strong>Discount:</strong> {product.discountPercentage}% off
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {product.rating}
              </p>
              <p>
                <strong>Stock:</strong>{" "}
                {product.stock > 0 ? (
                  <span className="text-success">
                    In Stock ({product.stock})
                  </span>
                ) : (
                  <span className="text-danger">Out of Stock</span>
                )}
              </p>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>
              <p>
                <strong>Shipping:</strong> {product.shippingInformation}
              </p>
              <p>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>

              <button className="btn btn-primary me-2">Add to Cart</button>
              <button className="btn btn-success">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-5">
        <h4>Customer Reviews</h4>
        {product.reviews?.length > 0 ? (
          <div className="list-group">
            {product.reviews.map((review, index) => (
              <div key={index} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-1">{review.reviewerName}</h6>
                  <small className="text-muted">
                    ⭐ {review.rating} |{" "}
                    {new Date(review.date).toLocaleDateString()}
                  </small>
                </div>
                <p className="mb-1">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted">No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
