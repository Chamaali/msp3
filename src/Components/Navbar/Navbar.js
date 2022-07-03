import React from 'react'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        <link>
            <li to="/bio" className='bio'>Bio</li>
        </link>
    </nav>
  )
}

export default Navbar