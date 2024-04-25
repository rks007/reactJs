import { RecoilRoot } from 'recoil'
import './App.css'
import Todos from './components/Todos'
import CreateTodo from './components/CreateTodo'

function App() {
  

  return (
    <>
      <RecoilRoot>
        <h1>Todo Application</h1>
        <CreateTodo/>
        <Todos/>
      </RecoilRoot>
    </>
  )
}

export default App
