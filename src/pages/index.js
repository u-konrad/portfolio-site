import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Stack from "../components/Stack"
import { graphql } from "gatsby"
import About from "../components/About"
import Contact from "../components/Contact"
import Fab from "../components/Fab"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = data

  return (
    <Layout>
      <Seo title="Portfolio" />
      <Hero />
      <Projects projects={projects} />
      <Stack />
      <About />
      <Contact />
      <Fab />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProject {
      nodes {
        title
        url
        github
        id
        stack {
          list
        }
        description {
          description
        }
        image {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
`

export default IndexPage
