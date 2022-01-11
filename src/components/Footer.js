import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <p className="my-3 text-muted">
          &copy;2021 Konrad Urbańczyk
        </p>
      </div>
    </footer>
  )
}

export default Footer
