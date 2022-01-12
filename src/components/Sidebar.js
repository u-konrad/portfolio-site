import React from "react"
import links from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes } from "react-icons/fa"
import "./Sidebar.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {links.map(link => {
            return (
              <li key={link.id}>
                <Link to={`/${link.url}`} onClick={toggleSidebar}>
                  {link.text}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={isOpen ? "social-links sidebar-icons" : null}>
          {socialLinks.map(link => {
            return (
              // <OverlayTrigger
              //   placement="bottom"
              //   delay={{ show: 200, hide: 200 }}
              //   overlay={<Tooltip id="button-tooltip">{link.name}</Tooltip>}
              // >
                <li key={link.id}>
                  <a href={link.url} className="social-link">
                    {link.icon}
                  </a>
                </li>
              // </OverlayTrigger>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
