import React from "react"
import { Container, Row, OverlayTrigger, Tooltip } from "react-bootstrap"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import HeroPic from "../assets/svg/undraw_programming_re_kg9v.svg"
import styled from "styled-components"

const Hero = () => {
  return (
    <Wrapper id="home" className="hero">
      <Container className="full-screen d-flex align-items-center p-100px-tb hero-center">
        <div className="hero-info col-7 ">
          <h6>Dzień dobry! Nazywam się...</h6>
          <h2 className="my-2">Konrad Urbańczyk</h2>
          <h1>Web developer</h1>
          <p className="mt-4 mb-2 col-6">Some text here about me how i am a great guy awesome.Some text here about me how i am a great guy awesome.</p>
          <div className="btn-bar mb-2">
            <Link className="m-btn m-btn-theme" to="#portfolio">
              Portfolio
            </Link>
            <Link className="m-btn m-btn-t-theme" to="#kontakt">
              Kontakt
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
                  <li>
                    <a href={link.url} className="social-link">
                      {link.icon}
                    </a>
                  </li>
                </OverlayTrigger>
              )
            })}
          </ul>
        </div>
          <HeroPic className='col-6' />
      </Container>
      <div className="icon-scroll-container">
        <Link className="icon-scroll" to="#portfolio"></Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


h6{
  font-weight:400;
  color:var(--clr-primary);
  font-size:18px;
}

h2{
  font-weight:300;
  font-size:72px;
  line-height:1;
}

h1{
  font-weight:bold;
  font-size:90px;
  line-height:1;

}


`

export default Hero
