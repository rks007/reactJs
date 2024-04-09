import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  
  const [income, setIncome] = useState(20000);

  const reference = useRef();

  useEffect(() => {
    setTimeout(() => {
      reference.current.innerHTML = 10000000
    }, 4000)
  },[])

  return (
    <>
      <h1>your income is <span id='sp' ref={reference}>{income}</span></h1>
    </>
  )
}

export default App
