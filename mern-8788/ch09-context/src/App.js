import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MyInputContext } from "./context/MyInputContext";
import Student from "./component/Student";
import { useState } from "react";

function App() {
  const [input, setInput] = useState(0);
  return (
    <div className="App">
      <MyInputContext.Provider value={{ input, setInput }}>
        <div className="row">
          <div className="col">
            <Student />
          </div>
          <div className="col">
            <Student />
          </div>
        </div>
      </MyInputContext.Provider>
    </div>
  );
}

export default App;
