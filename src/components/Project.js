import React from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { FaGithub, FaLink } from "react-icons/fa"
import { Link } from "gatsby"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

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
        <OverlayTrigger
          placement="bottom-start"
          delay={{ show: 200, hide: 200 }}
          overlay={<Tooltip id="button-tooltip">Live site</Tooltip>}
        >
          <a href={url}>
            <h3>{title}</h3>
          </a>
        </OverlayTrigger>

        <p className="project-desc">{description.description}</p>
        <div className="project-stack">
          {stack.list.map(item => {
            return <span key={item}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 200, hide: 200 }}
            overlay={<Tooltip id="button-tooltip">Live site</Tooltip>}
          >
            <a href={url} target="_blank">
              <FaLink className="social-link me-2"></FaLink>
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 200, hide: 200 }}
            overlay={<Tooltip id="button-tooltip">Github</Tooltip>}
          >
            <a href={github} target="_blank">
              <FaGithub className="social-link me-2"></FaGithub>
            </a>
          </OverlayTrigger>
        </div>
      </div>
    </article>
  )
}

export default Project
