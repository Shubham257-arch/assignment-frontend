import React from "react";

const DeleteActions = ({ titleList, handleDeleteAll }) => {
    return (
        <div>
            <button
                onClick={handleDeleteAll}
                style={{
                    margin: "5px",
                    padding: "10px",
                    backgroundColor: "red",
                    color: "white",
                }}
            >
                Delete All
            </button>
            {titleList.length === 0 && <p>No notes to delete.</p>}
        </div>
    );
};

export default DeleteActions;
