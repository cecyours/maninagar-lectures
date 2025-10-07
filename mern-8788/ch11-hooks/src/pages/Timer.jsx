import React, { useEffect, useState } from 'react'

function Timer() {
    
    const [count, setCount] = useState(0);

    useEffect (() => {
        document.title = `Clicked ${count} times`;
    }, [count]);
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>You clicked {count} times</h2>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default Timer

