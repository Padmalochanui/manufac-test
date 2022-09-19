import React from 'react'
import { Link } from 'react-router-dom'
import "./navBar.css"

const Navbar = () => {
  return (
    <div>
        <nav className='header'>
            <ul className='list'>
                <li><Link to='/' className='title'>Scatter Chart</Link></li>
                <li><Link to='/barchart' className='title'>Bar Chart</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar