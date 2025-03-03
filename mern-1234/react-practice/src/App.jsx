import React from "react";
import AboutUs from "./componets/AboutUs";
import ContactUs from "./componets/ContactUs";
import Product from "./componets/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import InputStates from "./componets/InputStates";
import StudentExample from "./componets/StudentExample";
import Counter from "./componets/Counter";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./componets/HomePage";
export default function App() {
  return (
    <div className="container bg-danger bg-opacity-25 p-2 rounded-3">
      <BrowserRouter>
        <div className="d-flex gap-5">
          <Link to={`/`}>Home</Link>
          <Link to={`/about-us`}>About us</Link>
        </div>
        <div className="u-nick">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<>404 error</>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
