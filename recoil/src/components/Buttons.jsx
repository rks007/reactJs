import React from 'react'
import { useSetRecoilState } from 'recoil'
import { counterState } from '../store/atoms/Counter'

function Buttons() {

    const setCount = useSetRecoilState(counterState);

  return (
    <div>
        <button onClick={() => setCount(count => count + 1)}>Increment</button>
        <button onClick={() => setCount(count => count - 1)}>Decrement</button>
    </div>
  )
}

export default Buttons