import React from "react"
import { HiMenu } from "react-icons/hi"
import pageLinks from "../constants/links"
import "./Navbar.css"

import { Link } from "gatsby"
const NavbarSecond = ({ toggleSidebar }) => {



  return (
    <nav className="navbar" id="navbar">
      <div className="nav-center container" >
          <Link className="logo-link" to={"/"}>
            <span className="logo">KU</span>
            <span className="logo logo-period">.</span>
          </Link>

        <div id="nav-links">
        <ul className="nav nav-links">
          {pageLinks.map(link => {
            return (
              <li key={link.id}>
                <Link className="nav-link" to={`/${link.url}`}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
            <HiMenu className="toggle-btn" onClick={toggleSidebar} />
        </div>
      </div>
    </nav>
  )
}

export default NavbarSecond