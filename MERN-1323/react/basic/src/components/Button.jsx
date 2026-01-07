import React from 'react'

const Button = () => {
    function hello(name) {
        console.log(`hello, ${name}`);
    }
  return (
    <div>
        <button onClick={hello} >Onclick</button>

        <button onMouseEnter={() => hello("Rosewin")}>On mounse enter</button>

        {/* { avoid } */}
        
        {/* <button onClick={hello("rosewin")}>click me</button> */}

        {/* <button onClick={hello()}>click me</button> */}
    </div>
  )
}

export default Button
