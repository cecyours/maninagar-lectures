import React from "react";
import Counter from "./components/Counter";
import DataFetcher from "./components/DataFetcher";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
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

    </div>
  );
}

export default App;