import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Event from './components/Event';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import ThemeComponents from './context/consumer/ThemeComponents';

function App() {
  return (
    <div className=" container p-2">
      {/* <List /> */}

      {/* <Event name={"CEC"} /> */}

      {/* <ControlledForm /> */}

      {/* <UncontrolledForm /> */}


      <ThemeComponents />
    </div>
  );
}

export default App;
