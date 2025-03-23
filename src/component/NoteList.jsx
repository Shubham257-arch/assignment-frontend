import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure React Router is installed

const App = () => {
  const [title, setTitle] = useState("");
  const [titleList, setTitleList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const navigate = useNavigate(); // React Router ka use karein

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

  const handleDeleteAll = () => {
    setTitleList([]);
  };

  const handleSave = () => {
    if (isEditing) {
      handleUpdate();
    } else {
      handleCreate();
    }
  };

  const handleLogout = () => {
    // React Router ka use karein (Agar routing hai)
    navigate("/login");

    // Ya simple redirect use karein
    // window.location.href = "/login";
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
                <button
                  onClick={() => {
                    setIsEditing(true);
                    setEditIndex(index);
                    setTitle(item);
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

      {/* Logout Button */}
      <div>
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
      </div>
    </div>
  );
};

export default App;
