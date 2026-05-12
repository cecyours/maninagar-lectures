import React from 'react'

function App() {
  const name = "Nasrin";
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
    <div>
      <h1>Welcome to react!</h1>
      <p>Hello, {name}! Today is {currentDate}.</p>
      <button onClick={() => alert("You clicked the button!")}>Click Me</button>
    </div>
    </>
  )
}

export default App
