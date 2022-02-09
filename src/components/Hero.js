import React from "react"
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import HeroPic from "../assets/svg/undraw_programming_re_kg9v.svg"
import styled from "styled-components"

const Hero = () => {
  return (
    <Wrapper id="home" className="page-padding p-100px-tb">
      <Container className="p-0 d-flex flex-wrap align-items-center justify-content-center ">
        <div className="hero-info col-12 col-lg-7 ">
          <h6>Dzień dobry! Nazywam się...</h6>
          <h2 className="my-2">Konrad Urbańczyk</h2>
          <h1>Web developer</h1>
          <p className="mt-4 mb-2 ">Some text here about me how i am a great guy awesome.Some text here about me how i am a great guy awesome.</p>
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
          <HeroPic className='col-12 col-lg-5' />
      </Container>
      <div className="icon-scroll-container">
        <Link className="icon-scroll" to="#portfolio"></Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
position: relative;
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

p{
  max-width:400px
}

@media screen and (max-width: 1400px) {

  h2{
    font-size:5vw
  }
  h1{
    font-size:6vw
  }
}


.icon-scroll-container {
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  left: 0;
}

.icon-scroll {
  width: 20px;
  height: 35px;
  box-shadow: inset 0 0 0 1.5px rgb(107, 107, 107);
  border-radius: 25px;
  /* margin-left: auto;
  margin-right: auto; */
}

@media screen and (max-width: 768px) {
  .icon-scroll-container {
    display: none;
  }
}

.icon-scroll:before {
  display: block;
  content: "";
  width: 4px;
  height: 8px;
  background: black;
  margin-left: 8px;
  margin-top: 3px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}

@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(23px);
  }
}


`

export default Hero
