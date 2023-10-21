import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (titleInput.trim() !== '') {
      const newTodos = [...todos];
      if (editIndex !== null) {
        newTodos[editIndex] = { title: titleInput, description: descriptionInput };
      } else {
        newTodos.push({ title: titleInput, description: descriptionInput });
      }
      setTodos(newTodos);
      setTitleInput('');
      setDescriptionInput('');
      setEditIndex(null);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    const todoToEdit = todos[index];
    setTitleInput(todoToEdit.title);
    setDescriptionInput(todoToEdit.description);
    setEditIndex(index);
  };

  return (
    <main>
      
       <div className='col-6 m-auto border p-3 text-center my-4'>
        <h1>My Todo List</h1>
        <input
          type='text'
          placeholder='Title'
          className='form-control'
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <input
          type='text'
          placeholder='Description'
          className='form-control my-2'
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
        <button onClick={addTodo} className='btn btn-success'>
          {editIndex !== null ? 'Edit Todo' : 'Add Todo'}
        </button>

        {todos.map((todo, index) => (
          <div key={index}>
            <p><strong>Title:</strong> {todo.title}</p>
            <p><strong>Description:</strong> {todo.description}</p>
            <button onClick={() => editTodo(index)} className='btn btn-primary btn-sm'>
              Edit
            </button>
            <button onClick={() => deleteTodo(index)} className='btn btn-danger btn-sm'>
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;
