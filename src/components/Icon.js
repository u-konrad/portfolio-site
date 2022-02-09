import React from "react"

const Icon = ({ name, children }) => {
  return (
    <div  className="icon d-flex flex-column align-items-center">
      <div className="mb-1 w-100">{children}</div>
      <span className="text-center">{name}</span>
    </div>
  )
}

export default Icon
