import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoForm } from '../Form'
import classNames from 'classnames';
import styles from './style.module.css';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo}) => {

  const [isEditing, setIsEditing] = useState(false); 

  const handleToggleComplete = () => {
    toggleComplete(task.id);  
  };

  const handleEditTodo = () => {
    setIsEditing(true);
  };

  const handleDeleteTodo = () => {
    deleteTodo(task.id); 
  };

  const handleSubmitEdit = (value) => {
    editTodo(task.id, value);
    setIsEditing(false);
  };
  
  return isEditing ? (
      <TodoForm
      handleSubmit={handleSubmitEdit}
      buttonText="Update To Do"
      initialValue={task.task}
      />
    ) : (
    <div className={styles.todo}>
      <p 
        onClick={handleToggleComplete} 
        className={classNames({
          [styles.completed]: task.completed,
          [styles.incompleted]: !task.completed
        })}
      >
        {task.task}
      </p>
      <div>
          <>
            <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditTodo} className={styles.editIcon} />
            <FontAwesomeIcon icon={faTrash} onClick={handleDeleteTodo} className={styles.deleteIcon} />
          </>
      </div>
    </div>
    )}
  
