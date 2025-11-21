import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  const handleFetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:9000/categories");

      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchCategories();
  }, []);

  return (
    <div>
      <h1>List category</h1>
      {categories.map((category) => (
        <>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </>
      ))}
    </div>
  );
};

export default CategoriesList;
