import React from "react"
// import logo from "../assets/images/logo.svg"
import { HiMenu } from "react-icons/hi"
import pageLinks from "../constants/links"
import "./Navbar.css"

import { Link } from "gatsby"
const Navbar = ({ toggleSidebar }) => {



  return (
    <nav className="navbar" id="navbar">
      <div className="padding-page w-100 d-flex justify-content-between align-items-center " >
          <Link className="logo-link" to={"/"}>
            <span className="logo">KU</span>
            <span className="logo logo-period">.</span>
          </Link>

        <div id=" nav-links">
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
            <HiMenu className="toggle-btn" onClick={toggleSidebar} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
