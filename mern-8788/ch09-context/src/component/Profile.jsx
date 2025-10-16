import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
    const { user, updateUser } = useContext(UserContext);

    const handleChange = () => {
        updateUser({ name: "Tanvi Darji", role: "Admin" });
    };

    return (
        <div>
            <h4>Profile Component</h4>
            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>
            <button onClick={handleChange}>Update User</button>
        </div>
    );
}

export default Profile;
