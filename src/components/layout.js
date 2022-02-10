import React, { useState, Fragment } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Fab from "../components/Fab"
// import SocialButtons from "../components/SocialButtons"


const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Fragment>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
      <Fab />
      {/* <SocialButtons/> */}
    </Fragment>
  )
}

export default Layout
