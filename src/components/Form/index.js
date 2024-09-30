import React, { useState } from 'react';
import styles from './style.module.css';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.todoInput}
        value={value}
        placeholder="What is the task to do?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className={styles.todoBtn}>Add Task</button>
    </form>
  );
};
