import React from 'react'

const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
            <Link to="/">DataFlick</Link>
        </h2>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>
    </nav>
  )
}

export default Navbar