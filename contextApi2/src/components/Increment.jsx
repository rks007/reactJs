import React, { useContext } from 'react'
import CountContext from '../Context/CountContext'

function Increment() {

    const {count, setCount} = useContext(CountContext);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Increment