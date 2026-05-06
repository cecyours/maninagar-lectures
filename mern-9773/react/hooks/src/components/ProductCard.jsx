import React, { useState } from "react";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>

      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}

export default ProductCard;