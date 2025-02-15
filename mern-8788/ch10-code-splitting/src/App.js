import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from "react";
import RandomArray from "./Components/RandomArray";

// const RandomArray = lazy(() => import("./Components/RandomArray"));
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Suspense fallback={<>Loading self</>}> */}
          <RandomArray />
        {/* </Suspense> */}
      </header>
    </div>
  );
}

export default App;
