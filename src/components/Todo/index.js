import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import styles from './style.module.css';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  
  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  const handleEditTodo = () => {
    editTodo(task);
  };

  const handleDeleteTodo = () => {
    deleteTodo(task.id);
  };

  return (
    <div className={styles.todo}>
      <p 
        onClick={handleToggleComplete} 
        className={classNames({
          [styles.completed]: task.completed,
          [styles.incompleted]: !task.completed,
        })}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditTodo} className={styles.editIcon} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDeleteTodo} className={styles.deleteIcon} />
      </div>
    </div>
  );
};
