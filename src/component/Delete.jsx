import React from "react";

const DeleteActions = ({ titleList, handleDeleteAll }) => {
  return (
    <div>
      {titleList.length > 0 && (
        <button
          onClick={handleDeleteAll}
          style={{ margin: "5px", padding: "10px", backgroundColor: "darkred", color: "white" }}
        >
          Delete All Titles
        </button>
      )}
    </div>
  );
};
export default DeleteActions;