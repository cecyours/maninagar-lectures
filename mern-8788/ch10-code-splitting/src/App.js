import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from "react";

// import RandomArray from "./Components/RandomArray";

const RandomArray = lazy(() => import("./Components/RandomArray"));
const Users = lazy(() => import("./pages/Users"));
function App() {
  return (
    <div className="container">
      <Suspense
        fallback={
          <div>
            <div className="spinner-border" role="status"></div>
          </div>
        }
      >
        <div className=" ">
          {/* <RandomArray /> */}
          <Users />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
