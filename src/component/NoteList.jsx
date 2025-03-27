import React, { useState } from "react";
import DeleteActions from "./Delete";
import EditActions from "./Edit";
import LogoutButton from "./Logout";

const NoteList = () => {
    const [title, setTitle] = useState("");  
    const [titleList, setTitleList] = useState([]);  
    const [isEditing, setIsEditing] = useState(false); 
    const [editIndex, setEditIndex] = useState(null);

    const handleCreate = () => {
        setTitleList([...titleList, title]);  
        setTitle("");  
    };

    const handleUpdate = () => {
        setTitleList((prevState) =>
            prevState.map((item, index) =>
                index === editIndex ? title : item 
            )
        );
        setIsEditing(false);  
        setTitle("");  
        setEditIndex(null);  
    };

    const handleDelete = (index) => {
        setTitleList((prevState) =>
            prevState.filter((item, i) => i !== index) 
        );
    };

    const handleSave = () => {
        if (isEditing) {
            handleUpdate();  
        } else {
            handleCreate();  
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");  
        window.location.href = "/";  
    };

    const handleDeleteAll = () => {
        setTitleList([]);  
    };

    return (
        <div style={{ margin: "50px" }}>
            <h2>Note lists</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Title"
                style={{ padding: "8px", marginBottom: "10px", width: "300px" }}
            />
            <div>
                <button
                    onClick={handleSave}
                    style={{
                        margin: "5px",
                        padding: "10px",
                        backgroundColor: "green",
                        color: "white",
                    }}
                >
                    {isEditing ? "Update" : "Create"} Title
                </button>
            </div>

            <div>
                {titleList.length > 0 && (
                    <ul>
                        {titleList.map((item, index) => (
                            <li key={index} style={{ marginBottom: "10px" }}>
                                <h3>{item}</h3>

                                {/* Edit and Delete buttons for each note */}
                                <button
                                    onClick={() => handleDelete(index)}
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
                )}
            </div>

            {/* Logout button */}
            <LogoutButton handleLogout={handleLogout} />
            {/* Delete All Button */}
            <DeleteActions titleList={titleList} handleDeleteAll={handleDeleteAll} />
        </div>
    );
};

export default NoteList;
