import React from "react";
import { Link } from "react-router-dom";
import {
  People,
  Gear,
  EnvelopeAt,
  PlusSquare,
  Grid3x3Gap,
} from "react-bootstrap-icons";

const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Dashboard",
      icon: <Grid3x3Gap />,
      path: "/admin",
    },
    {
      name: "Users",
      icon: <People />,
      path: "/admin/users",
    },
    {
      name: "Contact Us",
      icon: <EnvelopeAt />,
      path: "/admin/contact-us",
    },
    {
      name: "Create Product",
      icon: <PlusSquare />,
      path: "/admin/products/create",
    },
    {
      name: "Settings",
      icon: <Gear />,
      path: "/admin/settings",
    },
  ];

  return (
    <div
      className="d-flex flex-column bg-dark text-white vh-100"
      style={{ width: "250px" }}
    >
      <div className="p-3">
        <h4 className="mb-4 text-center">Admin Panel</h4>
        <nav className="nav flex-column">
          {sidebarItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="nav-link text-white text-decoration-none py-2 px-3 mb-1 rounded hover-bg-secondary d-flex align-items-center gap-2"
            >
              <span className="me-2">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
