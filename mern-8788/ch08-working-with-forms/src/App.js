 
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Student from "./components/Student";
import ControllInput from "./components/ControllInput";
import SignupForm from "./components/SignupForm";
import ContactForm from "./components/ContactForm";
import UncontrollInput from "./components/UncontrollInput";
import ControlledForm from "./components/ControlledForm";
import RefExample from "./components/RefExample";



function App() {
  return (
    // <div className="App container p-2">
    //   <Student name="Master" subject="Python" marks ={30}/>
    //   <Student name="Neha" subject="C++" />
    //   <Student name="Raju" marks ={80}/>
    //   <Student subject="php" marks ={60}/>
    // </div>
    // <ControllInput/>
    // <SignupForm/>
    // <ContactForm/>
    // <UncontrollInput/>
    // <ControlledForm />
    <RefExample/>
  );
}

export default App;
