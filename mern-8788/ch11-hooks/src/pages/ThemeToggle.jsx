import { useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const styles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <p>{dark ? "Dark Mode 🌙" : "Light Mode ☀️"}</p>
      <button onClick={() => setDark(!dark)}>Toggle Mode</button>
    </div>
  );
}

export default ThemeToggle;
