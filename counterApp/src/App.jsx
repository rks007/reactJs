import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CustomButton count={count} setCount={setCount}></CustomButton>
    </>
  )
}

//component
function CustomButton(props){
 
  function countHandler(){
    props.setCount(props.count + 1);
  }

  return <button onClick={countHandler}>Counter {props.count}</button>

}

export default App
