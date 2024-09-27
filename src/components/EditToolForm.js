import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value , setValue] = useState(task.task)

    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id);

        setValue("")
    }

    const handleChangeValue = e => {
      setValue(e.target.value);
    };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={handleChangeValue}/>
        <button type='submit 'className='todo-btn'>Update Task</button>
    </form>
  )
}
