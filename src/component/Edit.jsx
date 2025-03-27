import React from "react";

const EditActions = ({ item, index, setIsEditing, setEditIndex, setTitle }) => {
    const handleEdit = () => {
        setIsEditing(true);
        setEditIndex(index);
        setTitle(item);
    };

    return (
        <button
            onClick={handleEdit}
            style={{
                margin: "5px",
                padding: "8px",
                backgroundColor: "blue",
                color: "white",
            }}
        >
            Edit
        </button>
    );
};

export default EditActions;
