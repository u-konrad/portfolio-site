import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col, OverlayTrigger, Tooltip  } from "react-bootstrap"
import Layout from "../components/Layout"
import socialLinks from '../constants/social_links'

const IndexPage = () => (
  <Layout>
    <section id="home" className="home-banner-01">
      <Container className="my-container">
        <Row className="full-screen align-items-center p-100px-tb hero-center">
          <div className="hero-info">
            <h6>Dzień dobry! Nazywam się...</h6>
            <h1 className="my-2">Konrad Urbańczyk</h1>
            <h2>Web developer</h2>
            <div className="btn-bar mb-1">
              <Link className="m-btn m-btn-theme" to="/">
                Button
              </Link>
              <Link className="m-btn m-btn-t-theme" to="/">
                Button
              </Link>
            </div>
            <ul className= "social-links hero-icons" >
          {socialLinks.map(link => {
            return (
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={<Tooltip id="button-tooltip">{link.name}</Tooltip>}
              >
                <li key={link.id}>
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
              src="../assets/images/my-shape.jpg"
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
        <Link className="icon-scroll" to="/"></Link>
       </div>
    </section>
  </Layout>
)

export default IndexPage
