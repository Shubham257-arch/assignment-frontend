import React from "react";

const LogoutButton = ({ handleLogout }) => {
  return (
    <button
      onClick={handleLogout}
      style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
