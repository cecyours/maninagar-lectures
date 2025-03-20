import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Event from './components/Event';

function App() {
  return (
    <div className=" container p-2">
      {/* <List /> */}

      <Event name={"CEC"} />
    </div>
  );
}

export default App;
