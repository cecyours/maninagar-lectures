import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateElementDemo from "./page/CreateElementDemo";
import Expressions from "./page/Expressions";
import LogicalOperators from "./page/LogicalOperators";
import LogicalOperationsWithToggle from "./page/LogicalOperationsWithToggle";
import Work from "./page/Work";
function App() {
  const topics = [
    {
      url: "/create-element",
      label: "Create Element",
      component: <CreateElementDemo />,
    },
    {
      url: "/expression",
      label: "Expressions",
      component: (
        <>
          <Expressions></Expressions>
        </>
      ),
    },
    {
      url: "/logical-operators",
      label: "logical operators",
      component: (
        <>
          <div>
            <LogicalOperators />
            <hr />
            <LogicalOperationsWithToggle />
          </div>
        </>
      ),
    },
    {
      url: "/specifying-attributes",
      label: "Specifying attributes",
      component: (
        <>
          <Work />
        </>
      ),
    },
    {
      url: "/specifying-children",
      label: "Specifying children",
      component: <>Hello children</>,
    },
    { url: "/fragments", label: "Fragments", component: <>Hello Fragments</> },
  ];

  return (
    <div>
      <div className="container my-3">
        <BrowserRouter>
          <div className="my-3">
            <h1>Chapter 02 : Templating</h1>
          </div>
          <div className="row">
            <div className="col-md-2">
              {topics.map((topic, i) => (
                <div key={i}>
                  <Link to={topic.url} className="text-decoration-none">
                    {topic.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="col-md-10">
              <div className="border rounded-3 p-2">
                <Routes>
                  {topics.map((topic, i) => (
                    <>
                      <Route path={topic.url} element={topic.component}></Route>
                    </>
                  ))}
                </Routes>
              </div>
            </div>
          </div>
          <div></div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
