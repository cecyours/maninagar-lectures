import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCreate = () => {
  const productCategoryOptions = [
    "watches",
    "Wooden",
    "Plastics",
    "Clothes",
    "laptop",
  ];

  const [isDiscount, setIsDiscount] = useState(true);
  return (
    <div className="container-fluid py-2">
      {/* bread crumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/admin"}>Dashboard</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={"/products"}>Products</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create
          </li>
        </ol>
      </nav>

      <div>
        <form
          className="row   mx-4   p-3 rounded-4 shadow-sm border border-dark"
          action=""
        >
          <div className="col-4 mb-4">
            <div>
              <label htmlFor="pro_name">
                Name <span className="text-danger">*</span>{" "}
              </label>
              <input
                placeholder="Enter Product Name"
                type="text"
                name="pro_name"
                className=" form-control"
              />
            </div>
          </div>
          <div className="col-4 mb-4">
            <div>
              <label htmlFor="pro_category">
                Category <span className="text-danger">*</span>{" "}
              </label>
              <select className="form-select">
                <option value=""> select Category</option>

                {productCategoryOptions.map((value, index) => (
                  <div>
                    <option value={value}> {value}</option>
                  </div>
                ))}
              </select>
            </div>
          </div>
          <div className="col-4 mb-4">
            <div>
              <label htmlFor="pro_unit">
                Unit <span className="text-danger">*</span>{" "}
              </label>
              <input
                placeholder="Enter Product Quantity"
                type="number"
                name="pro_unit"
                className=" form-control"
              />
            </div>
          </div>
          <div className="col-4 mb-4">
            {" "}
            <div>
              <label htmlFor="pro_price">
                Price <span className="text-danger">*</span>{" "}
              </label>
              <input
                placeholder="Enter Product price"
                type="number"
                name="pro_price"
                className=" form-control"
              />
            </div>
          </div>{" "}
          <div className="col-2 mb-4">
            {" "}
            <div className="d-flex gap-3  mt-4">
              <input
                placeholder="Enter Product price "
                type="checkbox"
                name="pro_price"
                onChange={(e) => setIsDiscount(!isDiscount)}
                className=" form-check  w-10"
              />
              <label htmlFor="pro_price">
                Allow Discount <span className="text-danger">*</span>{" "}
              </label>
            </div>
          </div>{" "}
          {isDiscount && (
            <div className="col-2">
              {" "}
              <div>
                <label htmlFor="pro_discount">
                  Discount (%) <span className="text-danger">*</span>{" "}
                </label>
                <input
                  placeholder="Enter Product Discount in percentage"
                  type="number"
                  name="pro_discount"
                  className=" form-control"
                />
              </div>
            </div>
          )}
          <div className="col-2">
            {" "}
            <div className="">
              <label htmlFor="pro_price">
                Color <span className="text-danger">*</span>{" "}
              </label>
              <input
                placeholder="Enter Product price "
                type="text"
                name="pro_price"
                onChange={(e) => setIsDiscount(!isDiscount)}
                className=" form-control  w-10"
              />
            </div>
          </div>{" "}
          <div className="col-2">
            {" "}
            <div className="">
              <label htmlFor="pro_model">
                Model <span className="text-danger">*</span>{" "}
              </label>
              <input
                placeholder="Enter Product model "
                type="text"
                name="pro_model"
                onChange={(e) => setIsDiscount(!isDiscount)}
                className=" form-control  w-10"
              />
            </div>
          </div>{" "}
          <div className="col-12">
            <label htmlFor="pro_model">
              Description <span className="text-danger">*</span>{" "}
            </label>
            <textarea
              rows={4}
              cols={50}
              type="text"
              className=" form-control"
            />
          </div>{" "}
          <div className=" d-flex justify-content-between   mt-4">
            <div>
              <span className="text-danger">*</span> For Required fields
            </div>
            <button className="btn btn-success btn-sm w-25" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
