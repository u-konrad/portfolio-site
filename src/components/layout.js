import React, { useState, Fragment } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Fab from "../components/Fab"
import NavbarSecond from "./NavbarSecond"
// import SocialButtons from "../components/SocialButtons"

const Layout = ({ children, type = "index" }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Fragment>
      {type === "index" ? (
        <Navbar toggleSidebar={toggleSidebar} />
      ) : (
        <NavbarSecond toggleSidebar={toggleSidebar} />
      )}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
      <Fab />
      {/* <SocialButtons/> */}
    </Fragment>
  )
}

export default Layout
