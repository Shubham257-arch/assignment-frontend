import React, { useState } from "react";

const App = () => {
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

  const handleDeleteAll = () => {
    setTitleList([]);  // Clear the entire title list
  };

  const handleSave = () => {
    if (isEditing) {
      handleUpdate();  // If editing, update the title
    } else {
      handleCreate();  // If not editing, create a new title
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <h2>Manage Title</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}  // Update input value
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
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setEditIndex(index);  // Set the index of the title to edit
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
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Delete All Button */}
      <div>
        {titleList.length > 0 && (
          <button
            onClick={handleDeleteAll}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: "darkred",
              color: "white",
            }}
          >
            Delete All Titles
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
