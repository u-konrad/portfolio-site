import React from "react"
import styled from "styled-components"
import { OverlayTrigger } from "react-bootstrap"
import { Tooltip } from "react-bootstrap"
import socialLinks from "../constants/social_links"

const SocialButtons = () => {
  return (
    <Wrapper id="social-buttons" className="social-buttons">
      <ul className="d-flex flex-column">
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
      <div className="line"></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: calc(var(--p-inline-xl)/2);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 992px) {
    display: none;
  }

  .line {
    width: 1px;
    height: 10vh;
    background-color: grey;
  }
`

export default SocialButtons
