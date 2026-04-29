import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import User from "./components/props_state/User";
import Counter from "./components/props_state/Counter";

function App() {
  // const name = "Tanvi";
  // const currentDate = new Date().toLocaleDateString();

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

      {/* <div>
        <Header />
        <main style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Welcome to the Main Section</h2>
          <p>This is a React component rendering example.</p>
        </main>
        <Footer />
      </div> */}

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Props</h1>
        <User name="Tanvi" age={22} />
        <User name="Dhaval" age={20} />
        <User name="Ashvi" age={67} />

        <h2>Counter (State Example)</h2>
        <Counter />
      </div>
    </>
  );
}

export default App;
