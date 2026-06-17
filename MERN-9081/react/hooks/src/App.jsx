import React from "react";
import Counter from "./components/Counter";
import DataFetcher from "./components/DataFetcher";
function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Hooks Example</h1>
      <h2>Counter (useState)</h2>
      <Counter />
      <h2>Data Fetching (useEffect)</h2>
      <DataFetcher />
    </div>
  );
}
export default App;
