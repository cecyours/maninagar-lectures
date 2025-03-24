import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Event from './components/Event';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import ThemedComponents from './components/ThemedComponents';
import { useTheme } from './context/ThemeProvider';
function App() {
  const { theme } = useTheme()
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center vh-100 ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"
      }`}>
      {/* <List /> */}

      {/* <Event name={"CEC"} /> */}

      {/* <ControlledForm /> */}



      {/* <UncontrolledForm /> */}

      <ThemedComponents />
    </div>
  );
}

export default App;
