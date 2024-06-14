import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import {removeTodo, updateTodo, editState} from "../features/todo/todoSlice"

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeTodo(id));
    }

    const [newInput, setNewInput] = useState("");//this is for the handling updated value of todo text

    const handleEdit = (todo) => {
        setNewInput(todo.text);
        dispatch(editState(todo.id));
    }

    const handleUpdate = (id) => {
        dispatch(updateTodo({id, text: newInput}))
        dispatch(editState(id));
    }

  return (
    <>
    <div className=' text-3xl  mb-5 mt-3'>Your Todos</div>
    {todos.map((todo) => {
        return <div key={todo.id}>
          {todo.isEditable == true ? (
            <div>
                <input 
                type="text" 
                value={newInput}
                onChange={(e) => setNewInput(e.target.value)}
                />
                <button onClick={() => handleUpdate(todo.id)}>Done</button>
            </div>
          ) : (
            <div className='flex justify-between'>
                <h2>{todo.text}</h2>
                <button onClick={() => handleEdit(todo)}>Edit</button>
                <button onClick={() => handleDelete(todo.id)}>Remove</button>
            </div>
          ) }
        </div>
    })}
    </>
  )
}

export default Todos