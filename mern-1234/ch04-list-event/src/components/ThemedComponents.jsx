import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { add } from "../utils/mathUtils";

const ThemedComponents = () => {
  const { theme, toggleTheme } = useTheme();

  const sum = add(32768, -45678);

  console.log(theme);
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center vh-100 ${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
      } `}
    >
      <h1 className="mb-4">
        {theme === "light" ? "Light Theme 🌞 🚀 " : "Dark Theme 🌙 ➕"}
      </h1>

      <button className="btn btn-primary" onClick={toggleTheme}>
        Toggle Theme
      </button>

      {sum}
    </div>
  );
};

export default ThemedComponents;
