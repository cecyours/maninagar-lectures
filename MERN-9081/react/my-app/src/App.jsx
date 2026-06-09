import React from 'react'
import User from './components/User'

function App() {
  // const name = "Nasrin";
  // const currentDate = new Date().toLocaleDateString();

  return (
    <>
    <div>
      <h1>Welcome to react!</h1>
      {/* <p>Hello, {name}! Today is {currentDate}.</p>
      <button onClick={() => alert("You clicked the button!")}>Click Me</button> */}
      <User name="Tanvi" age={23}/>
      <User name="Nasrin" age={18}/>
      <User name="bgh" age={12}/>
    </div>
    </>
  )
}

export default App
