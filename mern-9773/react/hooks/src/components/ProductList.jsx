import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;