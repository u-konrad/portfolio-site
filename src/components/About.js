import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { FiDownload } from "react-icons/fi"
import { MdLocationOn } from "react-icons/md"

const About = () => {
  return (
    <section id="informacje" className="p-100px-tb bg-alternate">
      <Container className="my-container">
        <h2 className="section-title ">O MNIE</h2>
        <p className="my-2 section-subtitle">Kilka podstawowych informacji</p>
        <Row className="pt-5 pb-0 pb-lg-5">
          <Col md="5">
            <StaticImage
              src="../images/my-rect.jpg"
              alt="Konrad Urbańczyk"
              className="about-img"
              placeholder="tracedSVG"
              quality={100}
              width={400}
              height={400}
              layout="constrained"
            />
          </Col>
          <Col className="about-info" md="7">
            <h3>Konrad Urbańczyk</h3>
            <h4>Web developer</h4>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio
            </p>
            <p>
              <MdLocationOn />
              <strong> Lokalizacja:</strong> Warszawa, Polska
            </p>
            <button className=" m-btn m-btn-theme">
              <span className="me-1">Pobierz CV </span>
              <FiDownload style={{ fontSize: "20px" }} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
