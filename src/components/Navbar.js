import React from "react"
// import logo from "../assets/images/logo.svg"
import { FiMenu } from "react-icons/fi"
import pageLinks from "../constants/links"
import "./Navbar.css"

import { Link } from "gatsby"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center container" id="nav-links">
        <div className="nav-header">
          <Link to={'/'}>
            <span className="logo">KU</span>
            <span className="logo logo-period">.</span>
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FiMenu />
          </button>
        </div>
        <ul className="navbar-nav nav-links" >
          {pageLinks.map(link => {
            return (
              <Link key={link.id} to={link.url}>
                {link.text}
              </Link>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
