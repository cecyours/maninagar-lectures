import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"
import Login from './components/Login';
import SignUp from './components/SignUp';
import Operations from './components/Operations';
function App() {
  const [counter,setCounter] = useState(0)

  function handleAdd()
  {
    setCounter(counter+1);
  }


  function handleSub()
  {
    // counter-2;
    setCounter(counter-1);
  }
  return (
    <div className="container mt-4">
        {/* <SignUp/> */}
        <Operations/>
        <div className="row gap-5 mt-5 d-none">
          <div className="col d-flex justify-content-center border p-3 rounded-3">
              <button className="btn btn-primary" onClick={handleAdd}>+</button>
          </div>

          <div className="col d-flex justify-content-center border p-3 rounded-3">
            <h1>{counter}</h1>
          </div>

          <div className="col d-flex justify-content-center border p-3 rounded-3">

          
          <button className="btn btn-secondary" onClick={handleSub}>-</button>

          </div>
        </div>
    </div>
  )
}

export default App