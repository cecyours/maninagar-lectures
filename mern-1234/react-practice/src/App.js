import react, { useState } from "react";
//import "./App.css";
function Home() {
  // var name="mascev";
  const [name, setName] = useState("CEC");
  const [rollno, setRollNo] = useState(1);
  const [marks, setMarks] = useState(100);

  const handleCli = () => {
    setName("goparsir");
    setRollNo(2);
    setMarks(200);
    console.log({ name, rollno, marks });
  };
  return (
    <div className="App">
      <h1>
        heading {name},{rollno},{marks}
      </h1>
      <button onClick={handleCli}>click me</button>
    </div>
  );
}
export default Home;
