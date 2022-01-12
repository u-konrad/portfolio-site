import * as React from "react"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { useState } from "react"
import NavbarSecond from "../components/NavbarSecond"
import Seo from "../components/seo"
import NotFoundIcon from '../assets/svg/undraw_page_not_found_re_e9o6.svg'

const NotFoundPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="d-flex flex-column justify-content-between" style={{ height: "100vh" }}>
      <Seo title="404" />
      <NavbarSecond toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div style={{height:"5rem"}}></div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <NotFoundIcon style={{width:'600px'}}/>
        <h1 style={{ color: "black" }}>Nie znaleziono strony.</h1>
      </div>
      <Footer />
    </div>
  )
}

export default NotFoundPage
