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
    allContentfulProject(sort: {fields: order}) {
      nodes {
        description {
          raw
        }
        github
        title
        url
        images {
          gatsbyImageData(layout: CONSTRAINED, quality: 100, width: 900)
        }
        stack {
          items
        }
        id
      }
    }
  }
`


export default IndexPage
