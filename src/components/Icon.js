import React from "react"

const Icon = ({ name, children }) => {
  return (
    <div style={{width:'96px'}} className="d-flex flex-column align-items-center">
      <div className="mb-1">{children}</div>
      <span className="text-center">{name}</span>
    </div>
  )
}

export default Icon
