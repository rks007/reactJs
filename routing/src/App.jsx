import React, {Suspense} from 'react'
import {BrowserRouter, Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import './App.css'

const Dasbboard = React.lazy(() => import('./components/Dasbboard')) 
const Landing = React.lazy(() => import('./components/Landing'))

function App() {

  return (
    <>
      {/* <div>
        <button onClick={() => {
          // window.location.href = "/"
          navigate('/')
        }}>Landing Page</button>
        <button onClick={() => {
          // window.location.href = "/dashboard"
          navigate('/dashboard')
        }}>Dashboard Page</button>
      </div> */}



      <BrowserRouter>
         <Appbar/> {/*we are making a component inside the browser router to use the useNavigate hook from reacr router dom because it can run inside the browser router */}
         <Suspense fallback = {"Loading..."}>
         <Routes>
            <Route path = "/dashboard" element={<Dasbboard/>} />
            <Route path = "/" element = {<Landing/>} />
         </Routes>
         </Suspense>
      </BrowserRouter>
    </>  
  )
}

function Appbar(){
  const navigate = useNavigate();
  
  return <div>
    <button onClick={() => {
          navigate('/')
        }}>Landing Page</button>
        <button onClick={() => {
          navigate('/dashboard')
        }}>Dashboard Page</button>
  </div>
}

export default App
