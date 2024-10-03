import React, { useState } from 'react';
import styles from './style.module.css';

export const TodoForm = ({ initialValue = '', handleSubmit, placeholder, buttonText}) => {
  const [value, setValue] = useState(initialValue);

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
        placeholder={placeholder}
        onChange={handleChangeValue}
      />
      <button type="submit" className={styles.todoBtn}>
        {buttonText}
      </button>
    </form>
  );
};