import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  
  const handleToggleComplete = () => {
    toggleComplete(task.id);
  };

  const handleEditTodo = () => {
    editTodo(task.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(task.id);
  };

  return (
    <div className='Todo'>
      <p 
        onClick={handleToggleComplete} 
        className={classNames({ completed: task.completed })}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleEditTodo} />
        <FontAwesomeIcon icon={faTrash} onClick={handleDeleteTodo} />
      </div>
    </div>
  );
};
