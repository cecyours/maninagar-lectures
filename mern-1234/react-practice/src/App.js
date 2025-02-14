import react,{useState} from "react";
import "./App.css";
function Home() {
  // var name = "CEC";
  const [name,setName] = useState("CEC");


  const handleClick = () => {
    // name = "MASCEV";
    setName("Mascev")
    console.log("HEllo Coder ",name);
  };

  return (
    <div className="App">
      <h1>Hello World | {name}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Home;
