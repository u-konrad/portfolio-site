import React from "react"
import { FaGithub, FaLink } from "react-icons/fa"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Project = ({  title, github, stack, url, images, id, shortDesc }) => {
 

  return (
    <article className="project">
      <Link
        className="project-img-frame"
        to={`/${id}`}
      >
        <GatsbyImage
          image={getImage(images[0])}
          alt={title}
          className="project-img"
        />
      </Link>
      <div className="project-info">
        <Link to={`/${id}`} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </Link>

        <p className="project-desc my-3">{shortDesc?.shortDesc}</p>
        <div className="project-stack">
          {stack.items.map(item => {
            return <span key={item}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 200, hide: 200 }}
            overlay={<Tooltip id="button-tooltip">Link do strony</Tooltip>}
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <FaLink className="social-link me-2"></FaLink>
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 200, hide: 200 }}
            overlay={<Tooltip id="button-tooltip">Github</Tooltip>}
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-link me-2"></FaGithub>
            </a>
          </OverlayTrigger>
        </div>
      </div>
    </article>
  )
}

export default Project
