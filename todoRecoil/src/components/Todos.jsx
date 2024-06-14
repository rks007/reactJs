import React, { useState } from 'react'
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

    const isTodoEditable = (id) => {
      const updatedTodos = todos.map((todo) => {
        if(todo.id == id){
          return {
            ...todo,
            isEditable: !todo.isEditable
          }
        }
        return todo;
      })
      setTodos(updatedTodos);
    }

    const handleEditChanges = (id, newTodo) => {
      const updatedTodos = todos.map((todo) => {
        if(todo.id == id){
          return {
            ...todo,
            todo: newTodo
          }
        }
        return todo;
      })
      setTodos(updatedTodos);
    }

  return (
    <div>{todos.map((item) => {
        return <div key={item.id}>
            <br />
            {item.isEditable ? (
              <div>
                <input 
                type="text"
                value={item.todo}
                onChange={(e) => handleEditChanges(item.id, e.target.value)} 
                />
                <button style={{marginLeft: "5px"}} onClick={() => isTodoEditable(item.id)}>Done</button>
              </div>
            ) : (
              <div>
                <span>{item.todo}</span>
                <button style={{marginLeft: "10px"}} onClick={() => toggleCompleted(item.id)}> {item.completed == false ? "Mark as Completed" : "Done"}</button>
                <button style={{marginLeft: "5px"}} onClick={() => isTodoEditable(item.id)}>Edit</button>
                <button style={{marginLeft: "5px"}} onClick={() => deleteTodo(item.id)}>Delete</button>
              </div>
            )}
        </div>
    })}</div>
  )
}

export default Todos