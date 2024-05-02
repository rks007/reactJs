import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function useDebounceValue(value, timeout){//implementing debouncing 

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeValue = setTimeout(()=> {
      setDebouncedValue(value)
    }, timeout)

    return () => {//clearing the old clock
      clearTimeout(timeValue);
    }

  }, [value])

  return debouncedValue;
}

function App() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounceValue(value, 500)

  return (
    <>
      <h1>debounced value is {debouncedValue}</h1> {/*here we are printing the value which is written in the input box with a delay of 500ms */}

      <input style={{width: "500px", height:"30px"}} 
       type="text"
       value={value}
       placeholder='enter a value'
       onChange={(e) => setValue(e.target.value)}
       />
    </>
  )
}

export default App
