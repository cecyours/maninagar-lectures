import React from 'react'

function Argumap() {
    const fruits = ["Apple", "Banana", "Mango"]

    function Click(fruit){
        console.log("fruit types are: ", fruit);
    }
  return (
    <div>
      {fruits.map (
        (fruit, index) => (
            <button key={index}  onClick={() => Click(fruit)}>{fruit}</button>
        ))}
    </div>
  )
}

export default Argumap
