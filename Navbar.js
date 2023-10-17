import React from 'react'
import { Link } from 'react-router-dom'
import Context from './Context'

export default function Navbar() {
  return (
    <div className='m-10 rounded inline-block'>

      <Link to="/Login">Login</Link>{"    "}  
      <Link to="/Signup">signup</Link>{"   "}
      <Link to="/Tlist">Tlist</Link> {  }
      <Link to="/Product">Product</Link>            {/*    //sem Route & link attri=value (.ab)==(/ab) it Right syntax Then run it !!! But its Right=( / ) */}
   
    </div>
  )
}
