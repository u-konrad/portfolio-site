import React from "react"
import { Container } from "react-bootstrap"
import HtmlIcon from "../assets/svg/icons8-html-5.svg"
import TsIcon from "../assets/svg/icons8-typescript.svg"
import CssIcon from "../assets/svg/icons8-css3.svg"
import JsIcon from "../assets/svg/icons8-javascript.svg"
import NodeIcon from "../assets/svg/icons8-node-js.svg"
import ReactIcon from "../assets/svg/icons8-react-native.svg"
import GatsbyIcon from "../assets/svg/icons8-gatsbyjs.svg"
import MongoIcon from "../assets/svg/icons8-mongodb.svg"
import BootstrapIcon from "../assets/svg/icons8-bootstrap.svg"
import FigmaIcon from "../assets/svg/icons8-figma.svg"
import ReduxIcon from "../assets/svg/icons8-redux.svg"
import GitIcon from "../assets/svg/icons8-git.svg"
import Icon from "./Icon"

const Stack = () => {
  return (
    <section id="technologie" className="p-100px-tb page-padding">
      <Container className="my-container">
        <h2 className="section-title ">UMIEJĘTNOŚCI</h2>
        <p className="my-2 section-subtitle">Technologie z których korzystam</p>
        <div className="icon-container py-5">
          <Icon name="HTML5">
            <HtmlIcon />
          </Icon>
          <Icon name="CSS3">
            <CssIcon />
          </Icon>
          <Icon name="JavaScript">
            <JsIcon />
          </Icon>
          <Icon name="TypeScript">
            <TsIcon />
          </Icon>
          <Icon name="ReactJS">
            <ReactIcon />
          </Icon>
          <Icon name="Redux">
            <ReduxIcon />
          </Icon>
          <Icon name="NodeJS">
            <NodeIcon />
          </Icon>
          <Icon name="MongoDB">
            <MongoIcon />
          </Icon>
          <Icon name="GatsbyJS">
            <GatsbyIcon />
          </Icon>

          <Icon name="Bootstrap">
            <BootstrapIcon />
          </Icon>

          <Icon name="Git">
            <GitIcon />
          </Icon>
          <Icon name="Figma">
            <FigmaIcon />
          </Icon>
        </div>
      </Container>
    </section>
  )
}

export default Stack
