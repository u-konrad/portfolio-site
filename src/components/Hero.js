import React from "react"
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import HeroPic from "../assets/svg/undraw_programming_re_kg9v.svg"
import styled from "styled-components"
import ScrollIcon from "./ScrollIcon"

const Hero = () => {
  return (
    <Wrapper id="home">
      <Container className="p-0 d-flex flex-wrap align-items-center justify-content-center ">
        <div className="hero-info col-12 col-lg-7 ">
          <h6>Dzień dobry! Nazywam się...</h6>
          <h2 className="my-2">Konrad Urbańczyk</h2>
          <h1>Web developer</h1>
          <p className="mt-4 mb-3 ">
            Buduję atrakcyjne i funkcjonalne aplikacje internetowe przy użyciu
            najnowszych dostępnych technologii.
          </p>
          <div className="btn-bar mb-2">
            <Link className="m-btn m-btn-theme me-2" to="#portfolio">
              Portfolio
            </Link>
            <Link className="m-btn m-btn-t-theme" to="#kontakt">
              Kontakt
            </Link>
          </div>
          <ul className="social-row d-flex">
            {socialLinks.map(link => {
              return (
                <OverlayTrigger
                  key={link.id}
                  placement="bottom"
                  delay={{ show: 200, hide: 200 }}
                  overlay={<Tooltip id="button-tooltip">{link.name}</Tooltip>}
                >
                  <li>
                    <a
                      href={link.url}
                      className="social-link me-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  </li>
                </OverlayTrigger>
              )
            })}
          </ul>
        </div>
        <HeroPic className="hero-pic col-12 col-lg-5" />
      </Container>
      <ScrollIcon />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    min-height: 0;
    margin-top: 50px;
  }

  h6 {
    font-weight: 400;
    color: var(--clr-primary);
    font-size: 18px;
  }



  p {
    max-width: 400px;
  }


  @media screen and (max-width: 992px) {
    .hero-pic {
      padding-top: 20px;
      max-height: 35vh;
      /* aspect-ratio:4/3; */
      object-fit: cover;
    }
  }
`

export default Hero
