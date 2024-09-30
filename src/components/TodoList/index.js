import React from 'react';
import { Todo } from '../Todo';
import { EditTodoForm } from '../EditToolForm';

export const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo, editTask }) => {
    return (
        <>
            {todos.map(todo => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
                ) : (
                    <Todo
                        task={todo}
                        key={todo.id}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            ))}
        </>
    );
};
