import React from "react";

const LogoutButton = ({ handleLogout }) => {
    return (
        <button
            onClick={handleLogout}
            style={{
                margin: "5px",
                padding: "10px",
                backgroundColor: "orange",
                color: "white",
            }}
        >
            Logout
        </button>
    );
};

export default LogoutButton;
