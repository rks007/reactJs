
import { useState } from 'react'
import './App.css'

let counter = 3;

function App() {
  
  const [todos, setTodos] = useState([{
    id: 1,
    title: "todo 1",
    description: "description 1"
  },{
    id: 2,
    title: "todo 2",
    description: "description 2"
  },{
    id: 3,
    title: "todo 3",
    description: "description 3"
  }])

  function addTodo(){
    setTodos([...todos,{
      id: ++counter,
      title: Math.random(),
      description: Math.random()
    }])
    console.log(counter);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} /> )}
    </div>
  )
}


function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h3>
      {description}
    </h3>
  </div>
}

export default App
