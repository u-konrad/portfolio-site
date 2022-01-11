import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Stack from "../components/Stack"
import { graphql } from "gatsby"
import About from "../components/About"
import Contact from "../components/Contact"



const IndexPage = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = data
console.log(projects)

  return (
    <Layout>
      <Hero />
      <Projects projects={projects} />
      <Stack/>
      <About/>
      <Contact/>
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
