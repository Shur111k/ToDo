import React, { useState } from 'react';
import styles from './style.module.css';

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue('');
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.todoInput}
        value={value}
        placeholder="Update Task"
        onChange={handleChangeValue}
      />
      <button type="submit" className={styles.todoBtn}>Update Task</button>
    </form>
  );
};
