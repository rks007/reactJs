import React from 'react';
import { useState} from 'react'
import './App.css'

function App() {

  const [title, setTitle] = useState("My name is helloWorld");
  
  function Clickme(){
    setTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={Clickme}>Click me to change the title</button>
      <Header title={title}></Header>
      <Header title="rks2"></Header>
    </div>
  )
}

//react memo is used to not re render a component if it has not gone through any changes,
//in shot prevent from useless re rendering
const Header = React.memo(function Header({title}){ 
  return <div>
    {title}
  </div>
})

// function Header({title}){ //without memo
//   return <div>
//     {title}
//   </div>
// }

export default App
