import React from "react";
import { themeContext } from "../context/MyInputContext";

function SampleUi() {
  console.log("I am rendered");
  return (
    <>
      <themeContext.Consumer>
        {({isPrimaryTheme}) => (
          <>
            <div
              className={`border p-2 m-2 rounded-3 ${
                isPrimaryTheme ? "border-primary" : "border-secondary"
              }`}
            >
              <div className="row">
                <div
                  className={`col ${
                    isPrimaryTheme ? "text-primary" : "text-secondary"
                  }`}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum earum nobis nostrum pariatur voluptates est repellendus
                  officiis, dolorum laudantium atque qui ea aliquam rerum,
                  voluptas odit laboriosam, cupiditate autem. Natus?
                </div>
                <div className="col">
                  <button
                    className={`btn ${
                      isPrimaryTheme ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    Hello
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </themeContext.Consumer>
    </>
  );
}

export default SampleUi;
