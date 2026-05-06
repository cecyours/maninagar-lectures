import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";
import DataFetcher from "./components/DataFetcher";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fake API data
    const data = [
      { id: 1, name: "Laptop", price: 50000 },
      { id: 2, name: "Phone", price: 20000 },
      { id: 3, name: "Headphones", price: 2000 },
    ];
    setProducts(data);
  }, []);
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">React Hooks Example</h1>

      <div className="mb-5">
        <h2 className="mb-3">Counter (useState)</h2>
        <div className="card p-3 shadow-sm">
          <Counter />
        </div>
      </div>

      <div>
        <h2 className="mb-3">Data Fetching (useEffect)</h2>
        <div className="card p-3 shadow-sm">
          <DataFetcher />
        </div>
      </div>

      <div>
        <h1>Product App</h1>
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default App;
