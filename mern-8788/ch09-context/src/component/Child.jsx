import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Child() {
    const { message, setMessage } = useContext(MyContext);

    return (
        <div>
            <h2>Message: {message}</h2>
            <button onClick={() => setMessage("Hello from Child!")}>
                Change Message
            </button>
        </div>
    );
}

export default Child;
