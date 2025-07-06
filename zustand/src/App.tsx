
import './App.css'
import { useCounterStore, type CounterStore } from './store'

function App() {
  
  //@ts-ignore
  const count = useCounterStore((state) => state.count);
  //@ts-ignore
  const increment = useCounterStore((state) => state.increment);
    //@ts-ignore
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
    //@ts-ignore
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <div>{count}</div>
        <button onClick={increment}>Increse</button>
        <button onClick={incrementAsync}>IncreseAsync</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    </>
  )
}

export default App
