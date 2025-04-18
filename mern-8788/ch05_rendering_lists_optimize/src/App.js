import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import RenderList from "./pages/RenderList";
import InfiniteScroll from "./pages/InfiniteScrollDemo";

function App() {
  const items = [
    {
      url: "/render-list",
      title: "RenderList",
    },
    {
      url: "/infinite-list",
      title: "Infinite Render",
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
              RenderList JSX
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
                <Route path="/render-list" element={<RenderList/>}></Route>
                <Route path="/infinite-list" element={<InfiniteScroll/>}></Route>
                
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
  
    </>
  );
}

export default App;
