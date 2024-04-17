import React, { useContext } from 'react'
import CountContext from '../Context/CountContext'

function Count() {

    const {count} = useContext(CountContext);

  return (
    <div>
        <h1>the total count is {count}</h1>
    </div>
  )
}

export default Count