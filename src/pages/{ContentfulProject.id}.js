import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const ProjectPage = ({ data }) => {
  console.log(data)
  const { title } = data.contentfulProject
  return (
    <Layout type="other">
      <Seo title="Portfolio" />
      <div className="vh-100 d-grid align-items-center">{title}</div>
    </Layout>
  )
}

export const query = graphql`
  query GetProjectById($id: String) {
    contentfulProject(id: { eq: $id }) {
      github
      images {
        gatsbyImageData
      }
      url
      title
      description {
        raw
      }
    }
  }
`

const Wrapper = styled.div`
  --padding: 1rem;
  --container-width: 1320px;
  --container-width-xl: 1140px;
  --container-width-lg: 960px;
  --container-width-md: 720px;
  --container-width-sm: 540px;
  --nav-padding: 4rem;

  @media screen and (max-width: 1400px) {
    --container-width: var(--container-width-xl);
    --nav-padding: 3rem;
  }

  @media screen and (max-width: 1200px) {
    --container-width: var(--container-width-lg);
    --nav-padding: 2rem;
  }

  @media screen and (max-width: 992px) {
    --container-width: var(--container-width-md);
  }

  .nav {
    height: 100px;
    margin-bottom: 2rem;
    border: 1px solid blue !important;
  }

  .outer-container {
    display: grid;
    grid-template-columns: var(--padding) 1fr var(--padding);
    width: 100vw;
  }

  .full-width,
  .left,
  .right,
  .nav {
    grid-column: 2/3;
    border: 1px solid green;
  }

  .full-bleed,
  .bleed-left,
  .bleed-right,
  .full-bleed-sm {
    grid-column: 1/4;
    border: 1px solid red;
  }

  //breakpoint to multiple-columns

  @media screen and (min-width: 992px) {
    .outer-container {
      grid-template-columns: 1fr repeat(2, calc(var(--container-width) / 2)) 1fr;
    }
    .full-width {
      grid-column: 2/4;
    }
    .left {
      grid-column: 2/3;
    }

    .right {
      grid-column: 3/4;
    }

    .full-bleed {
      grid-column: 1/5;
    }

    .bleed-left {
      grid-column: 1/3;
    }

    .bleed-right {
      grid-column: 3/5;
    }

    .nav {
      grid-column: 1/5;
      padding-inline: var(--nav-padding);
    }
  }
`

export default ProjectPage
