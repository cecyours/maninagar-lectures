import React from 'react'

const Navbar = () => {
    const isAdmin = true;
    const name = "Rosewin";
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Service</li>
            <li className="nav-item user-name">
                {isAdmin ? name : "Please log in first"}
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
