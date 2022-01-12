import React from "react"
// import logo from "../assets/images/logo.svg"
import { HiMenu } from "react-icons/hi"
import pageLinks from "../constants/links"
import "./Navbar.css"

import { Link } from "gatsby"
const Navbar = ({ toggleSidebar }) => {



  return (
    <nav className="navbar" id="navbar">
      <div className="nav-center container" >
          <Link className="logo-link" to={"/"}>
            <span className="logo">KU</span>
            <span className="logo logo-period">.</span>
          </Link>
          {/* <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FiMenu />
          </button> */}
        <div id="nav-links">
        <ul className="nav nav-links">
          {pageLinks.map(link => {
            return (
              <li key={link.id}>
                <a className="nav-link" href={link.url}>
                  {link.text}
                </a>
              </li>
            )
          })}
        </ul>
        {/* <button type="button"  > */}
            <HiMenu className="toggle-btn" onClick={toggleSidebar} />
          {/* </button> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
