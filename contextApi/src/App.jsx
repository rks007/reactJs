
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import  { isEvenState, countAtom } from './store/atoms/Count'


function App() {
  

  return (
    <>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </>
  )
}

function Count(){
  console.log(" count re-render");
  return <div>
    <CountRenderer />
    <Buttons/>
    <IsEven/>
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)

  return <div>
    <h1>the count is {count}</h1>
  </div>
}

// function Buttons(){
//   const [count, setCount] = useRecoilState(countAtom);

//   return <div>
//     <button onClick={() => setCount(count + 1) }>Increase</button>
//     <button onClick={() => setCount(count - 1) }>Decrease</button>
//   </div>
// }

//another way, without getting count value from atom to stop unneccesary re rendering of buttons beacuse we just need setCount
function Buttons(){
  console.log("checking button re-render");
  const setCount = useSetRecoilState(countAtom);

  return <div>
    <button onClick={() => setCount(count => count + 1)}>Increase</button>
    <button onClick={() => setCount(count => count - 1)}>Decrease</button>
  </div>
}

function IsEven(){
const countValue = useRecoilValue(isEvenState)

  return <div>
    the count is {countValue == true ? "Even" : "Odd"}
  </div>
}

export default App
