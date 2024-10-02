import React, { useState } from 'react'; 
import { TodoForm } from '../Form';
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from '../TodoList';
import styles from './style.module.css';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task: todo, completed: false }
    ]);
  };

  const updateTodo = (taskId, value) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === taskId ? {...todo, task: value} : todo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <h1>Get Things To Do</h1>
      <TodoForm
        handleSubmit={addTodo}
        placeholder="Add tings to do"
        buttonText="Add To Do"
      />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}    
        editTodo={updateTodo}  
      />
    </div>
  );
};
