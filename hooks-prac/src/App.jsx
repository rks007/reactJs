import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    },3000)
  }, [])

  return (
    <>
      {render ? <MyComponent/> : <div>2nd div</div>}
    </>
  )
}

function MyComponent(){//lifecycle event
  useEffect(() => {
    console.error("component mounted");//it will run in the first render

    return () => {//this wil run when the Mycomponent will get change 
      console.log("component unmounted");
    }
  }, [])

  return <div>
    from inside my component
  </div>
}

export default App
