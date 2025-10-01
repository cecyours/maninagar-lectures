import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import InputEvents from "./pages/InputEvents";
import ButtonEvents from "./pages/ButtonEvents";
import CH08Compontents from "./pages/CH08Compontents";
import ReactEvent from "./pages/ReactEvent";

function App() {
  const items = [
    {
      url: "/input-events",
      title: "Input Events",
    },
    {
      url: "/button-events",
      title: "Input Events",
    },
    {
      url: "/ch08-components",
      title: "CH08 Components",
    },
  ];
  return (
    <>
      <ReactEvent />  
    </>
  );
}
export default App;
