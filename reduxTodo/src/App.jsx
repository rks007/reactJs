import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
      <h1 className=' text-3xl font-bold mb-3'>Learn ReduxToolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
