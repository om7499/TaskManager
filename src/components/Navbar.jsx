import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = ({darkMode,toggle}) => {
  return (
    <>
     
<nav className="navbar navbar-expand-lg navbar-dark bg-custom ">
    <div className="container-fluid">
      <NavLink className="navbar-brand " to="/">
       <span className='fs-3 fw-bold '> TaskManager</span>
      </NavLink>
  
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse flex justify-content-between" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item text-primary fs-5 fw-bold">
            <NavLink
              className="nav-link "
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item text-primary fs-5 fw-bold">
            <NavLink
              className="nav-link"
              to="/Task"
            >
              Task
            </NavLink>
          </li>
        </ul>
        <div>
          <button className='btn fw-bold btn-outline-light mx-1' >
          <NavLink to="/Task" className="nav-link ">Go To Task</NavLink>
          </button>

          <button onClick={toggle} className='btn btn-outline-light m-1'>
        {/* Conditional Icon: Moon 🌙 for darkMode and Sun ☀️ for lightMode */}
        {darkMode?(
          <span>🌙</span>
           ) : (
           <span>☀️</span>
          )
           }
         </button>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar
