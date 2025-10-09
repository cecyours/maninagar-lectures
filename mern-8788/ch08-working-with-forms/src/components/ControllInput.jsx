import React, { useState } from 'react'

function ControllInput() {

    const [email, setEmail] = useState("")
  return (
    <div>
        <h3>Controlled Input Example</h3>
        <input 
            type='email' 
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
        />
        <p>Typed Email: {email}</p>
    </div>
  )
}

export default ControllInput

