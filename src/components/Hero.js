import React from 'react'
import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Hero = () => {
    return (
             <section id="home" className="hero">
      <Container className="my-container">
        <Row className="full-screen align-items-center p-100px-tb hero-center">
          <div className="hero-info">
            <h6>Dzień dobry! Nazywam się...</h6>
            <h1 className="my-2">Konrad Urbańczyk</h1>
            <h3>Web developer</h3>
            <div className="btn-bar mb-2">
              <Link className="m-btn m-btn-theme" to="/">
                Button
              </Link>
              <Link className="m-btn m-btn-t-theme" to="/">
                Button
              </Link>
            </div>
            <ul className="social-links hero-icons">
              {socialLinks.map(link => {
                return (
                  <OverlayTrigger
                  key={link.id}
                    placement="bottom"
                    delay={{ show: 200, hide: 200 }}
                    overlay={<Tooltip id="button-tooltip">{link.name}</Tooltip>}
                  >
                    <li >
                      <a href={link.url} className="social-link">
                        {link.icon}
                      </a>
                    </li>
                  </OverlayTrigger>
                )
              })}
            </ul>
          </div>
          <div className="hero-img">
            <StaticImage
              src="../images/my-shape.jpg"
              alt="Konrad Urbanczyk"
              className="hero-img"
              layout="constrained"
              quality="100"
              style={{ marginBottom: `1.45rem` }}
            />
          </div>
        </Row>
      </Container>
      <div className="icon-scroll-container">
        <Link className="icon-scroll" to="#portfolio"></Link>
      </div>
    </section>
    )
}

export default Hero
