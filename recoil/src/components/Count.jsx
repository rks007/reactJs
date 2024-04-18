import React from 'react'
import { useRecoilValue } from 'recoil'
import { counterState } from '../store/atoms/Counter'

function Count() {
    const count = useRecoilValue(counterState);

  return (
    <div>
        <h1>the count is {count}</h1>
    </div>
  )
}

export default Count