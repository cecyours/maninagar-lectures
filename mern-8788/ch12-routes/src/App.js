import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
  NavLink,
  Navigate, 
  Outlet,
} from "react-router-dom";
// import Welcome from "./page/Welcome";
// import MyForm from "./page/MyForm";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Form from "./components/Form";

function App() {
  return (
    // <div className="App container">
       
    //   <RouterProvider
    //     router={createBrowserRouter([
    //       { path: "/", element: <Welcome /> },
    //       { path: "/my-form", element: <MyForm /> },
    //     ])}
    //   ></RouterProvider>
    // </div>
    <>
      <BrowserRouter>
        <div className="container mt-3">

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded p-3 mb-3">
            <NavLink to="/" end className="nav-link text-light mx-2">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link text-light mx-2">
              About
            </NavLink>
            <NavLink to="/users" className="nav-link text-light mx-2">
              Users
            </NavLink>
            <NavLink to="/profile" className="nav-link text-light mx-2">
              Profile
            </NavLink>
            <NavLink to="/form" className="nav-link text-light mx-2">
              Form
            </NavLink>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />}>
              <Route path=":id" element={<UserDetail />} />
            </Route>
            <Route path="/profile" element={<Navigate to="/users" replace />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
