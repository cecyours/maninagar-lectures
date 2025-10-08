import React, { useEffect} from 'react'

function WelcomeMessage() {

    useEffect(() => {
        console.log("Hello");
    }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h3>Welcome Message Example</h3>
        <p>Check the browser console!</p>
    </div>
  )
}

export default WelcomeMessage
