import './App.css'
import CountContextProvider from './Context/CountContextProvider'
import Count from './components/Count'
import Decrement from './components/Decrement'
import Increment from './components/Increment'

function App() {
  

  return (
    <>
      <CountContextProvider>
        <Count/>
        <Increment/>
        <Decrement/>
      </CountContextProvider>
    </>
  )
}

export default App
