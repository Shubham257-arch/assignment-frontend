import React, {useState} from "react";
import DeleteActions from "./Delete";
import EditActions from "./Edit";
import LogoutButton from "./Logout";
import ViewList from "./ViewList";

const NoteList = () => {
    const [title, setTitle] = useState("");  // Title input field state
    const [titleList, setTitleList] = useState([]);  // List of saved titles
    const [isEditing, setIsEditing] = useState(false);  // To check if we are editing an existing title
    const [editIndex, setEditIndex] = useState(null);  // To track the index of the title being edited

    const handleCreate = () => {
        setTitleList([...titleList, title]);  // Add the title to the list
        setTitle("");  // Clear the input
    };

    const handleUpdate = () => {
        setTitleList((prevState) =>
            prevState.map((item, index) =>
                index === editIndex ? title : item  // Update the title at the specific index
            )
        );

        setIsEditing(false);  // Stop editing
        setTitle("");  // Clear the input
        setEditIndex(null);  // Reset editIndex
    };


    const handleDelete = (index) => {
        setTitleList((prevState) =>
            prevState.filter((item, i) => i !== index)  // Remove the title at the specific index
        );
    };


    const handleSave = () => {
        if (isEditing) {
            handleUpdate();  // If editing, update the title
        } else {
            handleCreate();  // If not editing, create a new title
        }
    };
    const handleLogout = () => {
        localStorage.removeItem("token");  // Remove the token from local storage
        window.location.href = "/";  // Redirect to the login page
    };

    const handleDeleteAll = () => {
        setTitleList([]);  // Clear the title list
    };

    return (
        <div style={{margin: "50px"}}>
            <h2>Note lists</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}  // Update input value
                placeholder="Enter Title"
                style={{padding: "8px", marginBottom: "10px", width: "300px"}}
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
                            <li key={index} style={{marginBottom: "10px"}}>
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
                )}

            </div>

                        <ViewList
                titleList={titleList}
                handleDelete={handleDelete}
                setIsEditing={setIsEditing}
                setEditIndex={setEditIndex}
                setTitle={setTitle}
            />

            <LogoutButton handleLogout={handleLogout}/>
            {/* Delete All Button */}
            <DeleteActions titleList={titleList} handleDeleteAll={handleDeleteAll}/>
        </div>
    );
};

export default NoteList;
