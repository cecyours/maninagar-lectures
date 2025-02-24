import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense, lazy } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import Users from "./pages/Users";


// import RandomArray from "./Components/RandomArray";

const RandomArray = lazy(() => import("./Components/RandomArray"));
const Users = lazy(() => import("./pages/Users"));
const Home = lazy(() => import("./pages/Home"));
function App() {
  return (
    <div className="container">
      <Suspense
        fallback={
          <div className="bg-danger p-2">
            <div className="spinner-border" role="status"></div>
          </div>
        }
      >
        <BrowserRouter>
          <div className="d-flex m-2 gap-4 border-bottom border-danger pb-2">
              <Link to={`/`} className="btn border border-primary">Home</Link>
              <Link to={`/users`} className="btn border border-primary">Users</Link>
              <Link to={`/numbers`} className="btn border border-primary">Number</Link>
          </div>
          <Routes>
            <Route path="/"  element={<Home/>}></Route>
            <Route path="/users" element={<Users/>} ></Route>
            <Route path="/numbers" fallback={<>lroem</>} element={<RandomArray/>} ></Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
