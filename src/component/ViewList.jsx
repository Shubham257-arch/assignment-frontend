// components/ViewList.jsx
import React from "react";
import EditActions from "./Edit";  // Assuming EditActions is in the same folder
import DeleteActions from "./Delete";  // Assuming DeleteActions is in the same folder

const ViewList = ({ titleList, handleDelete, setIsEditing, setEditIndex, setTitle }) => {
    return (
        <div>
            {titleList.length > 0 ? (
                <ul>
                    {titleList.map((item, index) => (
                        <li key={index} style={{ marginBottom: "10px" }}>
                            <h3>{item}</h3>

                            <button
                                onClick={() => handleDelete(index)}  // Delete specific title
                                style={{
                                    margin: "5px",
                                    padding: "8px",
                                    backgroundColor: "red",
                                    color: "white",
                                }}
                            >
                                Delete
                            </button>

                            <EditActions
                                item={item}
                                index={index}
                                setIsEditing={setIsEditing}
                                setEditIndex={setEditIndex}
                                setTitle={setTitle}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No titles available.</p>
            )}
        </div>
    );
};

export default ViewList;
