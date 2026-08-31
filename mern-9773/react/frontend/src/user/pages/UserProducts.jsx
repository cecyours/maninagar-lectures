import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:9000";

const UserProducts = () => {
  const [products, setProducts] = useState([]); // always array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products`)
      .then((res) => {
        const list = Array.isArray(res.data?.products) ? res.data.products : [];

        setProducts(list);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setProducts([]); // safety
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (!products || products.length === 0) {
    return <p className="text-center mt-4">No products found</p>;
  }

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => {
          const imageUrl =
            Array.isArray(p.images) && p.images.length > 0
              ? `${BASE_URL}${p.images[0].url}`
              : "https://via.placeholder.com/300x200?text=No+Image";

          return (
            <div key={p._id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={imageUrl}
                alt={p.title}
                className="w-full h-40 object-cover rounded"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Image+Error";
                }}
              />

              <h2 className="mt-3 font-semibold">{p.title}</h2>
              <p className="text-green-600 font-bold">₹{p.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserProducts;
