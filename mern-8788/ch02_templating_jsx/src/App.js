import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateElement from "./pages/CreateElement";
import Expressions from "./pages/Expressions";
import Logicaloperators from "./pages/Logicaloperators";
import SpecifyingAttributes from "./pages/SpecifyingAttributes";
import SpecifyingChildren from "./pages/SpecifyingChildren";
import Fragments from "./pages/Fragments";

function App() {
  const items = [
    {
      url: "/create-element",
      title: "Create Element",
    },
    {
      url: "/expressions",
      title: "Expressions",
    },
    {
      url: "/logical-operators",
      title: "Logical operators",
    },
    {
      url: "/specifying-attributes",
      title: "Specifying attributes",
    },
    {
      url: "/specifying-children",
      title: "Specifying children",
    },
    {
      url: "/fragments",
      title: "Fragments",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <div className="d-flex" style={{ minHeight: "100vh" }}>
          {/* Sidebar */}
          <div
            className="d-flex flex-column p-3 bg-light shadow-sm"
            style={{ width: "300px" }}
          >
            <h3 className="text-center mb-4 border-bottom pb-2">
              Templating JSX
            </h3>
            <ul className="nav nav-pills flex-column">
              {items.map((item, i) => (
                <li className="nav-item mb-2" key={i}>
                  <Link to={item.url} className="nav-link text-dark">
                    <span className="bg-primary text-white p-2 rounded-pill me-2">{i + 1}</span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-grow-1 p-4">
            <div className="container border-start">
              <Routes>
                <Route path="/" element={<>Hello World</>}></Route>
                <Route
                  path="/create-element"
                  element={<CreateElement />}
                ></Route>
                <Route path="/expressions" element={<Expressions />}></Route>
                <Route
                  path="/logical-operators"
                  element={<Logicaloperators />}
                ></Route>
                <Route
                  path="/specifying-attributes"
                  element={<SpecifyingAttributes />}
                ></Route>
                <Route
                  path="/specifying-children"
                  element={<SpecifyingChildren />}
                ></Route>
                <Route path="/fragments" element={<Fragments />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
