import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <h3>Home</h3>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dasborad'>Dashbord</Link></li>
            <li><Link to='/signin'>Login</Link></li>
            <li><Link to='/signup'>Register</Link></li>
        </ul>
      </nav>
    </div>
  )
}
