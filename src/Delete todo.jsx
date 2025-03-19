const TodoCard = ({ todo, refreshTodos }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/todos/${todo.id}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      refreshTodos();  // Trigger a refresh of the list of to-dos
    } catch (error) {
      console.error("Error deleting To-Do", error);
    }
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoCard;
