import React from "react"
import { FaGithub, FaLink } from "react-icons/fa"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"


const Project = ({ description, title, github, stack, url, img }) => {
  return (
    <article className="project">
      <div className="project-img-frame">
        <StaticImage
          src={img}
          alt={title}
          className="project-img"
          layout="fullWidth"
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

        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item}>{item}</span>
          })}
        </div>
        <div className="project-links">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 200, hide: 200 }}
            overlay={<Tooltip id="button-tooltip">Live site</Tooltip>}
          >
            <a
              href="https://www.gatsbyjs.com/docs/using-client-side-only-packages/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
