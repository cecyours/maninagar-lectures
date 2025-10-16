import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Header() {
    // const { user } = useContext(UserContext);
    const { user, updateUser } = useContext(UserContext);

    const handleChange = () => {
        updateUser({ name: "Tanvi Darji", role: "Admin" });
    };
    return (
        <header style={{ background: "#f0f0f0", padding: "10px" }}>
            <h2>Welcome, {user.name}!</h2>
            <p>Role: {user.role}</p>
            <button onClick={handleChange}>Change User Info</button>
        </header>
    );
}

export default Header;
