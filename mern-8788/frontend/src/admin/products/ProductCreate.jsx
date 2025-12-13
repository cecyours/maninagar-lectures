import React, { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const ProductCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    console.log(checked);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("/categories/select");

      console.log(res.data.data);
      setCategories(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/products", formData);
      if (res.status === 201) {
        toast.success("Product created successfully");
        navigate("/admin/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Create Product
        </h1>

        <form onSubmit={handleSubmit} action="">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-1"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-1"
            >
              description
            </label>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-1"
            >
              category
            </label>
            <select
              name="category"
              onChange={handleChange}
              value={formData.category}
              id=""
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option value={category._id}>{category.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-1"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              className="w-full border border-gray-300 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2  my-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;