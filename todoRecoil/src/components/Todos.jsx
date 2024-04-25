import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { todoAtom } from '../store/atoms/Atom'

function Todos() {
    const [todos, setTodos] = useRecoilState(todoAtom);

    const toggleCompleted = (id) => {
      const updatedTodos = todos.map((todo) => {
        if(todo.id === id){
          return{
            ...todo,
            completed: !todo.completed,
          }
        }
        //if todo.id does not match with the id then return unchanged todo
        return todo;
      })
      setTodos(updatedTodos);
    }

    const deleteTodo = (id) => {
      const removeTodo = todos.filter((todo) => todo.id !== id )
      setTodos(removeTodo)
    }

  return (
    <div>{todos.map((item) => {
        return <div key={item.id}>
            <br />
            <span>{item.todo}</span>
            <button style={{marginLeft: "10px"}} onClick={() => toggleCompleted(item.id)}> {item.completed == false ? "Mark as Completed" : "Done"}</button>
            <button style={{marginLeft: "5px"}}>Edit</button>
            <button style={{marginLeft: "5px"}} onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
    })}</div>
  )
}

export default Todos