import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import axiosInstance from "../../config/axiosConfig";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const handleFetchProducts = async () => {
    try {
      const res = await axiosInstance.get("/products");

      setProducts(res.data.createdProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`/products/${id}`);

      if (response.status === 200) {
        toast.error("Product deleted successfully");
        handleFetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {
    navigate(id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-semibold">List Products</h1>

        <Link
          className="bg-green-300 shadow-sm px-4 py-1 rounded-xl"
          to={"create"}
        >
          Create
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b">Title</th>
              <th className="p-3 border-b">Description</th>
              <th className="p-3 border-b">category</th>

              <th className="p-3 border-b text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="p-3 border-b">{product.title}</td>
                <td className="p-3 border-b">{product.description}</td>
                <td className="p-3 border-b">
                  <Link to={`/admin/categories/${product.category._id}`}>
                    {product.category.title}
                  </Link>
                </td>
                <td className="flex justify-center border-b p-3 gap-2 font-semibold">
                  <button
                    onClick={() => handleEdit(product._id)}
                    className="bg-blue-300 rounded-xl shadow-sm px-3 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-300 rounded-xl shadow-sm px-3 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="p-3 text-center text-gray-500 border-b"
                >
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
