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
                <button onClick={() => handleUpdate(todo.id)} 
                className=' ml-1 bg-blue-400 w-20 rounded-md hover:bg-blue-500'>
                  Done</button>
            </div>
          ) : (
            <div className='flex justify-between'>
                <h2 className='flex flex-1'>{todo.text}</h2>
                <div>
                  <button onClick={() => handleEdit(todo)} 
                  className=' bg-yellow-500 p-1 rounded-md w-20 hover:bg-yellow-600 '>
                    Edit</button>
                  <button onClick={() => handleDelete(todo.id)} 
                  className='bg-red-500 p-1 rounded-md w-20 hover:bg-red-600'>
                    Remove</button>
                </div>
            </div>
          ) }
        </div>
    })}
    </>
  )
}

export default Todos