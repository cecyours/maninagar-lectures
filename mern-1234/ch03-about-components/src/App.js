import logo from './logo.svg';
import './App.css';
import FunctionalComponents from './components/FunctionalComponents';
import ClassBasedComponents from './components/ClassComponents';
import PureComponents from './components/PureComponents';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import StateExample from './components/StateExample';

function App() {
  return (
    <div className="App">
      <Header />


      <StateExample />

      {/* <Content /> */}


      <FunctionalComponents age={345} />

      {/*
      <hr />
      <ClassBasedComponents area={"Maninagar , Vatva , nikol"} />

      <hr />
      <PureComponents count={4} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
