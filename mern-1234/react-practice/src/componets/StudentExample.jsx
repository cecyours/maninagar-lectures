import React, { useState } from "react";

function StudentExample() {
  const [text, setText] = useState(null);
  const[textf,setTextf]=useState("Student")
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const fChange=(e) =>{
    setTextf(e.target.value);
  }
  

  return (
    <div className="d-flex gap-3">
      StudentExample
      <div>
        <input value={text} className="form-control" onChange={handleChange} />
        <br></br><input value={textf} className="form-control" onChange={fChange}></input>

      </div>
      <button className="btn btn-info">Show</button>
    </div>
  );
}

export default StudentExample;
