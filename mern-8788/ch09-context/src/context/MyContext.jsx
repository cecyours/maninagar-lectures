import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [message, setMessage] = useState("Hello Students!");

    return (
        <MyContext.Provider value={{ message, setMessage }}>
            {children} {/* This allows children components to access the context */}
        </MyContext.Provider>
    );
};
