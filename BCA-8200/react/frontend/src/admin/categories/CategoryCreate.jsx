import React, { useState } from "react";
import axios from "axios";

const CategoryCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9000/categories",
        formData
      );

      if (response.status === 201) {
        alert("Category created successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Category creation failed");
    }
  };

  return (
    <div>
      <h1>Create Category</h1>

      <form onSubmit={handleSubmit} action="">
        <label htmlFor="title">Category Title</label>
        <input
          type="text"
          name="title"
          id=""
          onChange={handleChange}
          value={formData.title}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CategoryCreate;
