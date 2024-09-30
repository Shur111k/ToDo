import React from 'react';
import { Todo } from '../Todo';

export const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          task={todo}
          key={todo.id}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </>
  );
};
