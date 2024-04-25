import React, { useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { todoAtom } from '../store/atoms/Atom';

function CreateTodo() {
    const [input, setInput] = useState();
    const [todos, setTodos] = useRecoilState(todoAtom);

    function addTodo(){
        const newTodo = {
            id: todos.length + 1,
            todo: input,
            completed: false,
        };
        setTodos([...todos, newTodo])
        setInput("");
    }

  return (
    <div>
        <input type="text" placeholder='enter todo' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default CreateTodo