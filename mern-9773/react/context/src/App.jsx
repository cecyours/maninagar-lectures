import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Profile />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
export default App;