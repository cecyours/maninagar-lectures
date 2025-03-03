import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Welcome from "./page/Welcome";
import MyForm from "./page/MyForm";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App container">
       
      <RouterProvider
        router={createBrowserRouter([
          { path: "/", element: <Welcome /> },
          { path: "/my-form", element: <MyForm /> },
        ])}
      ></RouterProvider>
    </div>
  );
}

export default App;
