import "./App.css";
import Add from "./componets/Add";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./componets/Data";
import User from "./componets/User";
function Home() {
  return (
    <div className="container p-2">
      <Add />
      <hr />
      <Data />
      <hr />
      <User />
    </div>
  );
}

export default Home;
