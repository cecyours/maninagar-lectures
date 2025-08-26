import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        minHeight: "80vh",
        padding: "20px",
      }}
    >
      {theme === "light" ? "☀️" : "🌑"}
      <button
        className={` btn ${
          theme === "light" ? "btn-success" : "btn-secondary"
        }  `}
        onClick={toggleTheme}
      >
        Toggle Theme{" "}
      </button>
    </div>
  );
};

export default Theme;
