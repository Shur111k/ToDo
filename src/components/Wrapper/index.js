import React, { useState } from 'react';
import { TodoForm } from '../Form';
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from '../TodoList';
import styles from './style.module.css';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task: todo, completed: false }
    ]);
  };

  const updateTodo = (task) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editingTodo.id ? { ...todo, task } : todo
      )
    );
    setEditingTodo(null);
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

  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Get Things To Do</h1>
      {editingTodo ? (
        <TodoForm task={editingTodo.task} isEditing={true} handleSubmit={updateTodo} />
      ) : (
        <TodoForm handleSubmit={addTodo} />
      )}
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={handleEditTodo}
      />
    </div>
  );
};
