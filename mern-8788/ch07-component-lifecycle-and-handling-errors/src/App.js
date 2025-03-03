import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LifeCycle from "./components/LifeCycle";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <LifeCycle />
        </div>
        <div className="col">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
