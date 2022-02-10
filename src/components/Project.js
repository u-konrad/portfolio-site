import React from "react"
import { FaGithub, FaLink } from "react-icons/fa"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Fragment } from "react"

const Project = ({ description, title, github, stack, url, images }) => {

  const descriptionText = description => {
    return (
      <Fragment>
        {JSON.parse(description.raw).content.map(p => (
          <p >{p.content[0].value}</p>
        ))}
      </Fragment>
    )
  }

  return (
    <article className="project">
      <div className="project-img-frame">
        <GatsbyImage
          image={getImage(images[0])}
          alt={title}
          className="project-img"
        />
      </div>
      <div className="project-info">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>

        <div className="project-desc my-3">{descriptionText(description)}</div>
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
