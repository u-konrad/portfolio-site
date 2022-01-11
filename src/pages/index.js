import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import { graphql } from "gatsby"



const IndexPage = ({ data }) => {
  const {
    allContentfulProject: { nodes: projects },
  } = data
console.log(projects)

  return (
    <Layout>
      <Hero />
      <Projects projects={projects} />
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
