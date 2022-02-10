import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { FiDownload } from "react-icons/fi"
import { MdLocationOn } from "react-icons/md"

const About = () => {
  return (
    <section id="informacje" className="p-100px-tb bg-alternate page-padding">
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
            Projektuję i buduję nowoczesne aplikacje internetowe, skupiając się na łączeniu funkcjonalności i stylowego designu. Moją pasją jest opanowywanie nowych technologii i znajdywanie innowacyjnych i efektywnych rozwiązań dla pojawiających się problemów. 
            </p>
            <p>
              <MdLocationOn />
              <strong> Lokalizacja:</strong> Warszawa, Polska
            </p>
            <a className=" m-btn m-btn-theme" style={{width:'180px'}} href='/konrad_urbanczyk_cv.pdf' download>
              <span className="me-1">Pobierz CV </span>
              <FiDownload style={{ fontSize: "20px" }} />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
