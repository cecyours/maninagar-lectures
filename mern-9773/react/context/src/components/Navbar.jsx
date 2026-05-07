import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
function Navbar() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <nav
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: theme === "light" ? "#f5f5f5" : "#333",
          color: theme === "light" ? "#333" : "#f5f5f5",
        }}
      >
        <h2>Navbar - {theme} mode</h2>
      </nav>
    </div>
  );
}
export default Navbar;
