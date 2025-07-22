import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponents from "../components/Navbar";
import FooterComponent from "../components/Footer";

const UserLayout = () => {
  return (
    <div className="user-layout">
      <NavbarComponents />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default UserLayout;
