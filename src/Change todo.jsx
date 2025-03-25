const TodoCard = ({ todo }) => {
  const [status, setStatus] = useState(todo.status);

  const toggleStatus = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/todos/${todo.id}/`,
        { status: !status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setStatus(response.data.status);
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Status: {status ? "Done" : "Not Done"}</p>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
};

export default TodoCard;
