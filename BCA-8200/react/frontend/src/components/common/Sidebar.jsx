import React from "react";
import { CheckCircle, Database, Grid } from "lucide-react";
import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const location = useLocation();

  const NavLinks = [
    {
      title: "Categories",
      icon: <Grid className="w-5 h-5" />,
      href: "/admin/categories",
    },
    {
      title: "Product",
      icon: <Database className="w-5 h-5" />,
      href: "/admin/products",
    },
    {
      title: "Todos",
      icon: <CheckCircle className="w-5 h-5" />,
      href: "/admin/todos",
    },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-5 flex flex-col gap-3">
      <h1 className="text-center font-semibold text-2xl ">XYZ Store</h1>

      {NavLinks.map((link) => {
        const isActive = location.pathname === link.href;

        return (
          <Link
            key={link.title}
            to={link.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition 
              ${isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-800"}`}
          >
            {link.icon}
            <span>{link.title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
