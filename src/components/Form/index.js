import React, { useState } from 'react';
import styles from './style.module.css';

export const TodoForm = ({ task = '', isEditing = false, handleSubmit }) => {
  const [value, setValue] = useState(task);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(value);
    setValue('');
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        className={styles.todoInput}
        value={value}
        placeholder={isEditing ? 'Update Task' : 'What is the task to do?'}
        onChange={handleChangeValue}
      />
      <button type="submit" className={styles.todoBtn}>
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};
