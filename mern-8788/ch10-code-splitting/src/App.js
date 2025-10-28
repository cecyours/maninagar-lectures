// import logo from "./logo.svg";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import { Suspense, lazy } from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import { Navbar } from "react-bootstrap";
// // import Home from "./pages/Home";
// // import Users from "./pages/Users";

// // import RandomArray from "./Components/RandomArray";

// // const RandomArray = lazy(() => import("./Components/RandomArray"));
// // const Users = lazy(() => import("./pages/Users"));
// // const Home = lazy(() => import("./pages/Home"));4

// function App() {
//   return (
//     // <div className="container">
//     //   <Suspense
//     //     fallback={
//     //       <div className="bg-danger p-2">
//     //         <div className="spinner-border" role="status"></div>
//     //       </div>
//     //     }
//     //   >
//     //     <BrowserRouter>
//     //       <div className="d-flex m-2 gap-4 border-bottom border-danger pb-2">
//     //           <Link to={`/`} className="btn border border-primary">Home</Link>
//     //           <Link to={`/users`} className="btn border border-primary">Users</Link>
//     //           <Link to={`/numbers`} className="btn border border-primary">Number</Link>
//     //       </div>
//     //       <Routes>
//     //         <Route path="/"  element={<Home/>}></Route>
//     //         <Route path="/users" element={<Users/>} ></Route>
//     //         <Route path="/numbers" fallback={<>lroem</>} element={<RandomArray/>} ></Route>
//     //       </Routes>
//     //     </BrowserRouter>
//     //   </Suspense>
//     // </div>
//   );
// }

// export default App;

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Users = lazy(() => import('./pages/Users'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));


const App = () => {

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user' element={<Users />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Signup' element={<Signup />} />
        </Routes>
      </ Suspense>
    </>
  );
};

export default App;
