import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateElementDemo from "./page/CreateElementDemo";
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
      component: <>Hello Expressions</>,
    },
    {
      url: "/logical-operators",
      label: "logical operators",
      component: <>Hello logical</>,
    },
    {
      url: "/specifying-attributes",
      label: "Specifying attributes",
      component: <>Hello attributes</>,
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
      <h1>Hello World</h1>
      <div className="container">
        <BrowserRouter>
          <h1>My Header</h1>
          <div className="row">
            <div className="col-md-2">
              {topics.map((topic, i) => (
                <div key={i}>
                  <Link to={topic.url} className="text-decoration-none border">
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
          <h1>My Footer</h1>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
