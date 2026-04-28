import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const name = "Tanvi";
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      {/* <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to React!</h1>
        <p>
          Hello, {name}! Today is {currentDate}.
        </p>
        <button onClick={() => alert("You clicked the button!")}>
          Click Me
        </button>
      </div> */}

      <div>
        <Header />
        <main style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Welcome to the Main Section</h2>
          <p>This is a React component rendering example.</p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
