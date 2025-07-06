import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MutationHook from "./components/MutationHook";
import User from "./components/User";
import NavBar from "./components/NavBar";


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element = {<MutationHook/>} />
          <Route path="/user" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function wait(duration){
  return new Promise(resolve => setTimeout(resolve, duration))
}

export default App
