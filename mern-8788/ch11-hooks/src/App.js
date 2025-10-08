import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomHookDemo from "./pages/CustomHookDemo";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import AddUser from "./pages/AddUser";
import Logout from "./pages/Logout";
import CountExample from "./pages/CountExample";
import ThemeToggle from "./pages/ThemeToggle";
import Timer from "./pages/Timer";
import TextInput from "./pages/TextInput";
import TextInputULR from "./pages/TextInputULR";
import Doubler from "./pages/Doubler";
import ColorChanger from "./pages/ColorChanger";
import RandomNumber from "./pages/RandomNumber";
import WelcomeMessage from "./pages/WelcomeMessage";

function App() {
  // const [render, setRender] = useState(0);
  return (
    <>
      {/* <BrowserRouter>
        <div className="d-flex gap-5 bg-light p-2 border rounded-3 m-2">
          <Link to={`/`}>Home</Link>
          <Link to={`/prompt`}>User prompt Navigate</Link>
          <Link to={`/user`}>User Profile</Link>
          <Link to={`/switch`}>Switch User</Link>
          <Link to={`/logout`}>logout</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/switch" element={<AddUser />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/prompt" element={<Logout />} />
        </Routes>
      </BrowserRouter> */}
      <div className="app-container py-4">
        <div className="text-center mb-4">
          <h1 className="fw-bold text-primary">React Practice Playground</h1>
          <p className="text-secondary">
            Explore different React Hooks and Components in one place
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div className="col">
            <div className="card shadow p-3 border-0 h-100">
              <h4 className="card-title text-center text-info mb-3">Text Input</h4>
              <TextInput />
            </div>
          </div>

          <div className="col">
            <div className="card shadow p-3 border-0 h-100">
              <h4 className="card-title text-center text-info mb-3">Text Input (URL)</h4>
              <TextInputULR />
            </div>
          </div>

          <div className="col">
            <div className="card shadow p-3 border-0 h-100">
              <h4 className="card-title text-center text-info mb-3">Doubler</h4>
              <Doubler />
            </div>
          </div>

          <div className="col">
            <div className="card shadow p-3 border-0 h-100">
              <h4 className="card-title text-center text-info mb-3">Color Changer</h4>
              <ColorChanger />
            </div>
          </div>

          <div className="col">
            <div className="card shadow p-3 border-0 h-100">
              <h4 className="card-title text-center text-info mb-3">Random Number</h4>
              <RandomNumber />
            </div>
          </div>

          <div className="col">
            <div className="card shadow p-3 border-0 h-100">
              <h4 className="card-title text-center text-info mb-3">Timer</h4>
              <Timer />
            </div>
          </div>

          <div className="col">
            <div className="card shadow p-3 border-0 h-100">
              <h4 className="card-title text-center text-info mb-3">Counter</h4>
              <CountExample />
            </div>
          </div>

          <div className="col">
            <div className="card shadow p-3 border-0 h-100">
              <h4 className="card-title text-center text-info mb-3">Theme Toggle</h4>
              <ThemeToggle />
            </div>
          </div>
  

          <div className="col">
              <div className="card shadow p-3 border-0 h-100">
                <h4 className="card-title text-center text-info mb-3">Welcome Message</h4>
                <WelcomeMessage />
              </div>
          </div>
        </div>

        <footer className="text-center mt-4 text-muted small">
          Made with by Tanvi Darji
        </footer>
      </div>
  
    </>
  );
}

export default App;
