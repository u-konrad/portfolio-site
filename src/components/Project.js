import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { FaGithub, FaLink } from "react-icons/fa"
import { Link } from "gatsby"

const img = "../assets/images/test.jpg"
const Project = ({ description, title, github, stack, url, image }) => {
  return (
    <article className="project">
      <div className="project-img-frame">
      <GatsbyImage
        image={getImage(image)}
        className="project-img"
        alt={title}
      />
      </div>
      <div className="project-info">
        <a href={url}><h3>{title}</h3></a>
        
        <p className="project-desc">{description.description}</p>
        <div className="project-stack">
          {stack.list.map(item => {
            return <span key={item}>{item}</span>
          })}
        </div>
        <div className="project-links">
        <a href={url}>
            <FaLink className="social-link me-2"></FaLink>
          </a>
          <a href={github}>
            <FaGithub className="social-link me-2"></FaGithub>
          </a>
        
        </div>
      </div>
    </article>
  )
}

export default Project
