import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DemoButtons from "./pages/DemoButtons";
import DemoModal from "./pages/DemoModal";
import ClassComponents from "./pages/ClassComponents";
import DemoPureClassComponent from "./pages/DemoPureClassComponent";
import ComponentComposition from "./pages/ComponentComposition";
function App() {
  const items = [
    {
      url: "/components/buttons",
      title: "Button Components",
    },
    {
      url: "/components/modal",
      title: "Modal Components",
    },
    {
      url: "/class-components",
      title: "Class Components",
    },
    {
      url: "/pure-class-components",
      title: "Pure Class Components",
    },

    {
      url: "/component-composition",
      title: "Component Composition",
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
              Components JSX
            </h3>
            <ul className="nav nav-pills flex-column">
              {items.map((item, i) => (
                <li className="nav-item mb-2" key={i}>
                  <Link to={item.url} className="nav-link text-dark">
                    <span className="bg-primary text-white p-2 rounded-pill me-2">
                      {i + 1}
                    </span>
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
                  path="/components/buttons"
                  element={<DemoButtons />}
                ></Route>
                <Route path="/components/modal" element={<DemoModal />}></Route>
                <Route
                  path="/class-components"
                  element={<ClassComponents />}
                ></Route>
                <Route
                  path="/pure-class-components"
                  element={<DemoPureClassComponent />}
                ></Route>
                <Route
                  path="/component-composition"
                  element={<ComponentComposition />}
                ></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
