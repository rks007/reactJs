import './App.css'
import Count from './components/Count'
import Buttons from './components/Buttons'
import IsEven from './components/IsEven'
import { RecoilRoot } from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
        <Count/>
        <Buttons/>
        <IsEven/>
      </RecoilRoot>
    </>
  )
}

export default App
