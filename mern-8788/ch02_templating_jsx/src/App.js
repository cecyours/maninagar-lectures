import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateElement from "./pages/CreateElement";
import Expressions from "./pages/Expressions";
import Logicaloperators from "./pages/Logicaloperators";
import SpecifyingAttributes from "./pages/SpecifyingAttributes";

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
      url: "/specifying children",
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
        <div className="d-flex">
          <div className=" p-2 w-25 nav">
            <h1>Templating Jsx</h1>
            {items.map((item, i) => (
              <li className="nav-item" key={i}>
                <Link to={`${item.url}`}>{item.title}</Link>
              </li>
            ))}
          </div>
          <div className="container border-start mt-4">
            <Routes>
              <Route path="/" element={<>Hello World</>}></Route>
              <Route path="/create-element" element={<CreateElement />}></Route>
              <Route path="/expressions" element={<Expressions />}></Route>
              <Route path="/logical-operators" element={<Logicaloperators />}></Route>
              <Route path="/specifying-attributes" element={<SpecifyingAttributes />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
