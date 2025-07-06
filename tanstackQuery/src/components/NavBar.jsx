import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <div>
            <Link to={"/"} style={{marginRight:"10px"}}>Home</Link>
            <Link to={"/user"}>Users</Link>
        </div>
    </div>
  )
}

export default NavBar