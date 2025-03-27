import React, { useState } from 'react';
import axios from 'axios';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data to be sent to backend
    const newTodo = {
      title,
      description,
    };

    try {
      const response = await axios.post(
        'http://localhost:8000/api/todos/',  // Change URL based on your backend API
        newTodo,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you're using token-based authentication
          },
        }
      );
      console.log('New To-Do created:', response.data);
      // Optionally, clear the form after submitting
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating To-Do', error);
    }
  };

  return (
    <div>
      <h2>Create a New To-Do</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
        </div>
        <div>
          <button type="submit">Create To-Do</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
