import React from "react";
import { useTheme } from "../context/ThemeProvider";

const ThemedComponents = () => {
  const { theme, toggleTheme } = useTheme();

  console.log(theme);

  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center vh-100   `}
    >
      <h1 className="mb-4">
        {theme === "light" ? "Light Theme 🌞 🚀 " : "Dark Theme 🌙 ➕"}
      </h1>

      <button className="btn btn-primary" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponents;
