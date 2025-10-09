 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "./components/Student";
import ControllInput from "./components/ControllInput";
import UncontrolledInput from "./components/UncontrolledInput";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    // <div className="App container p-2">
    //   <Student name="Master" subject="Python" marks ={30}/>
    //   <Student name="Neha" subject="C++" />
    //   <Student name="Raju" marks ={80}/>
    //   <Student subject="php" marks ={60}/>
    // </div>
    // <ControllInput/>
    // <UncontrolledInput/>
    <SignupForm/>
  );
}

export default App;
