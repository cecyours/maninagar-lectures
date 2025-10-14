import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { MyInputContext, themeContext } from "./context/MyInputContext";
import Student from "./component/Student";
import { useState } from "react";
import Teacher from "./component/Teacher";
import SampleUi from "./component/SampleUi";
import Coint from "./component/Coint";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeButton from "./component/ThemeButton";

function App() {
  const [input, setInput] = useState(0);
  const [isPrimaryTheme, setIsPrimaryTheme] = useState(true);
  return (
    <div className="App">
      {/* <MyInputContext.Provider value={{ input, setInput }}>
        <div className="p-2">
          <div className="row">
            <div className="col">
              <Student />
              <Coint />
            </div>
            <div className="col">
              <Teacher />
            </div>
            <div className="col">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={isPrimaryTheme}
                  onChange={(e) => {
                    setIsPrimaryTheme(e.target.checked);
                  }}
                />
                <label
                  class="form-check-label btn"
                  for="flexSwitchCheckChecked"
                >
                  {isPrimaryTheme ? "primary" : "secondary"}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <themeContext.Provider value={{ isPrimaryTheme }}>
            <SampleUi />
          </themeContext.Provider>
        </div>
      </MyInputContext.Provider> */}
      <ThemeProvider >
        <ThemeButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
