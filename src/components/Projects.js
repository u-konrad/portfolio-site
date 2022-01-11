import React from "react"
import { Container } from "react-bootstrap"
import Project from "./Project"
const Projects = ({ projects }) => {
  return (
    <section id="portfolio" className="p-100px-tb bg-alternate">
      <Container className="my-container">
        <h2 className="section-title ">PORTFOLIO</h2>
        <p className="my-2 section-subtitle">Kilka najnowszych projektów</p>
        <div className="py-5">
          {projects.map((project, index) => {
            return <Project key={project.id} index={index} {...project} />
          })}
        </div>
      </Container>
    </section>
  )
}

export default Projects
