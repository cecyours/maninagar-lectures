import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const pageStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#222" : "#fff",
    height: "100vh", 
    display: "flex",
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center", 
    transition: "0.3s",
  }
  return (
    <div style={pageStyle}>
      <h1> Current Theam: {theme}</h1>
      <button
        onClick={toggleTheme}
        style={{ 
          padding: "10px 20px",
          borderRadius: "8px", 
          border: "none",
          cursor: "pointer", 
          backgroundColor: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#000",   
          transition: "0.3s",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  )
}

export default ThemeButton
