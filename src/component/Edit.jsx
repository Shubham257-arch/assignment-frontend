import React from "react";
const EditActions = ({ item, index, setIsEditing, setEditIndex, setTitle }) => {
    return (
        <>
            <button
                onClick={() => {
                    setIsEditing(true);
                    setEditIndex(index);  // Set the index of the title to edit
                    console.log("title : ", item);
                    console.log("index : ", index);
                    setTitle(item);  // Set the title to be edited
                }}
                style={{
                    margin: "5px",
                    padding: "8px",
                    backgroundColor: "blue",
                    color: "white",
                }}
            >
                Edit
            </button>
        </>
    );
}


export default EditActions;
