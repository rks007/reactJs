import React from 'react'
import { useRecoilValue } from 'recoil'
import { counterSelector } from '../store/atoms/Counter'

function IsEven() {

    const isEven = useRecoilValue(counterSelector)

  return (
    <div>
        <h4>count is {isEven == true ? "Even" : "Odd"}</h4>
    </div>
  )
}

export default IsEven