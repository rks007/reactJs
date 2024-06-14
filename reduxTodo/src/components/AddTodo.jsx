import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import {addTodo} from "../features/todo/todoSlice"

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        if(input.length != 0){
            dispatch(addTodo(input));
            setInput("");
        }else{
            alert("please write something in the input box")
        }
    }

  return (
    <>
    <div>
        <input 
        type="text"
        value={input}
        placeholder='write your todos'
        onChange={(e) => setInput(e.target.value)}
        />
        <button className='ml-2' onClick={handleAddTodo}>Add Todo</button>
    </div>
    </>
  )
}

export default AddTodo