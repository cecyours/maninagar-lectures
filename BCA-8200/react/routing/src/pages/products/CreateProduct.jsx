import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:9000/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/products",
        formData
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="shadow p-5  ">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name"> Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter product name"
            />
          </div>

          {/* description */}
          <div>
            <label htmlFor="description"> description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-control"
              placeholder="enter product description"
            />
          </div>

          {/* price */}
          <div>
            <label htmlFor="price"> price</label>
            <input
              type="number"
              name="price"
              onChange={handleInputChange}
              value={formData.price}
              className="form-control"
              placeholder="enter product price"
            />
          </div>

          <div className="w-100 text-center  ">
            <button className="btn btn-primary  mx-auto w-25 " type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
