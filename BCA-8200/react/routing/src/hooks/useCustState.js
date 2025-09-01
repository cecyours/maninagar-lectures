import React, { useState } from 'react'

const useCustState = (initialValue) => {

    const [state, setState] = useState(initialValue)


    const setCustState = (value) => {
        setState(value)
    }


    return [state, setCustState];
}

export default useCustState
