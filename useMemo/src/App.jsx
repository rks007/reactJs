
import { useState, useMemo } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  
  let finalSum = useMemo(() => {
    let sum = 0;
    for(let i = 1; i <= parseInt(text); i++){
      sum = sum + i;
    }
    return sum;
  },[text])
    
    
  return (
    <>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      <div>Sum from 1 to {text} = {finalSum}</div>
      <button onClick={() => setCount(count + 1)}>Counter {count} </button>
    </>
  )
}

export default App
