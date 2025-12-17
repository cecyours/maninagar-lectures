import React, { useState } from 'react'

const Rosewin = () => {
    const [name, setName] = useState(null);

    const RosewinRose = () => {
        setName(name);
    };

  return (
    <div>
        <input type="text" onChange={(e) => RosewinRose(e)} />

        {name && <h1>Hello {name} </h1>}
    </div>
  )
}

export default Rosewin;
