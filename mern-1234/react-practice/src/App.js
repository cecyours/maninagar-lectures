import React from "react";
import AboutUs from "./componets/AboutUs";
import ContactUs from "./componets/ContactUs";
import Product from "./componets/Product";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div className="container bg-danger bg-opacity-25 p-2 rounded-3">
      <h1 className="text-center">React Demo</h1>
      <hr />
      <div className="mb-5">
        <AboutUs />
      </div>
      <div className="mb-5">
        <Product />
      </div>
      <div className="mb-5">
        <ContactUs />
      </div>
    </div>
  );
}
