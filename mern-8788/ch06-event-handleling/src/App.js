import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import InputEvents from "./pages/InputEvents";
import ButtonEvents from "./pages/ButtonEvents";

function App() {
  const items = [
    {
      url: "/input-events",
      title: "Input Events",
    },
    {
      url: "/button-events",
      title: "Input Events",
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
              Event Handling
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
                <Route path="/input-events" element={<InputEvents />}></Route>
                <Route path="/button-events" element={<ButtonEvents />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
