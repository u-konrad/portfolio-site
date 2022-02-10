import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Stack from "../components/Stack"
import About from "../components/About"
import Contact from "../components/Contact"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
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
    </Layout>
  )
}



export const query = graphql`
  {
    allContentfulProject {
      nodes {
        description {
          raw
        }
        github
        id
        title
        url
        images {
          gatsbyImageData(width: 800, quality: 100, layout: CONSTRAINED)
        }
        stack {
          items
        }
      }
    }
  }
`


export default IndexPage
