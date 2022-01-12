import React from "react"
import { FaArrowUp } from "react-icons/fa"
import { Link } from "gatsby"

const Fab = () => {
  return (
    <Link id="fab" to="#home" className="fab  ">
      <FaArrowUp />
    </Link>
  )
}

export default Fab
