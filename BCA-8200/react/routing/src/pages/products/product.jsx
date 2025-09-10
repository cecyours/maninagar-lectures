import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="container my-5">
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-3  col-sm-3" key={product.id}>
            <div className="card h-100 shadow-sm">
              {/* Product Image */}

              <span className="position-absolute top-0    me-1 end-0 rounded-bottom-2  px-2  bg-success-subtle  ">
                {product.brand}
              </span>

              <span className="position-absolute top-0  start-0  ms-1  rounded-bottom-2   px-2  bg-danger-subtle  ">
                {product.discountPercentage.toFixed(0)}% off
              </span>
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "contain" }}
              />

              {/* Card Body */}
              <div className="card-body">
                <h5 className="card-title my-2  fs-6 text-center">
                  {product.title}
                </h5>
                <div className="d-flex justify-content-between">
                  <p className="mb-1 fw-bold"> ${product.price}</p>
                  <p className="mb-1">{"⭐".repeat(product.rating)}</p>
                </div>
              </div>

              {/* Footer with View More */}
              <div className="card-footer text-end bg-white d-flex justify-content-between">
                <Link
                  className="text-decoration-none "
                  to={`/products/${product.id}`}
                >
                  {" "}
                  View More{" "}
                </Link>

                <button
                  className="btn btn-sm btn-light "
                  onClick={() => dispatch(addToCart(product))}
                >
                  🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
