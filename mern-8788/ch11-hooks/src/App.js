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

function App() {
  const [render, setRender] = useState(0);
  return (
    <div className="container">
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
      <CountExample />
      < ThemeToggle />
    </div>
  );
}

export default App;
