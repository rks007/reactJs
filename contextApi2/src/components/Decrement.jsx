import React, { useContext } from 'react'
import CountContext from '../Context/CountContext'

function Decrement() {

    const {count, setCount} = useContext(CountContext);

  return (
    <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Decrement