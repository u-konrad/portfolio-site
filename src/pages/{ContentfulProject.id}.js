import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Fragment } from "react"

const ProjectPage = ({ data }) => {
  console.log(data)
  const { title, images, description, url, github, stack } =
    data.contentfulProject

  const descriptionText = description => {
    return (
      <Fragment>
        {JSON.parse(description.raw).content.map((p, index) => (
          <p className="mb-2" key={index}>
            {p.content[0].value}
          </p>
        ))}
      </Fragment>
    )
  }

  return (
    <Layout type="other">
      <Seo title="Portfolio" />
      <Wrapper className="bg-alternate">
        <div className="outer-container bg-alternate">
          <div className="full-width title-box text-center">
            <h1 className="">{title}</h1>
            <p className="my-5">{descriptionText(description)}</p>
            <div className="d-flex ">
              <a href={url} className="m-btn m-btn-theme me-3">
                Strona
              </a>
              <a href={github} className="m-btn m-btn-t-theme">
                Github
              </a>
            </div>
          </div>
        </div>
        <div className="outer-container pb-5">
          <div className="full-width d-flex justify-content-center ">
            <GatsbyImage
              image={getImage(images[0])}
              alt={title}
              className="img shadow"
            />
          </div>
        </div>
        <div className="outer-container py-5">
          <div className="full-width d-flex flex-column mx-auto justify-content-center desc-box ">
            <h3 className="mb-4">Opis projektu</h3>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Laoreet sit amet cursus sit amet dictum. Dui sapien eget mi proin
              sed. Sit amet massa vitae tortor condimentum lacinia quis vel. Nam
              aliquam sem et tortor consequat id porta. At lectus urna duis
              convallis. Semper risus in hendrerit gravida rutrum quisque non
              tellus orci. Eget duis at tellus at urna condimentum mattis
              pellentesque. Sit amet cursus sit amet. Facilisis leo vel
              fringilla est ullamcorper. Sit amet porttitor eget dolor. Lectus
              urna duis convallis convallis tellus id interdum velit. Sed tempus
              urna et pharetra pharetra massa massa. Sit amet venenatis urna
              cursus. Tortor
            </p>
            <h3 className="mb-4">Technologie</h3>
            <div className="stack-items">
              {stack.items.map(item => {
                return <span key={item}>{item}</span>
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetProjectById($id: String) {
    contentfulProject(id: { eq: $id }) {
      github
      images {
        gatsbyImageData(layout: CONSTRAINED, quality: 100, width: 900)
      }
      stack {
        items
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
  min-height: 100vh;
  padding-top: calc(82px + 10vh);
padding-bottom: 5vh;

  p {
    line-height: 1.6;
  }

  h3 {
    font-weight: bold;
  }

  .title-box {
    padding-bottom: 10vh;
    width: 100%;
    max-width: 900px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title-box p {
    max-width: 40ch;
    font-size: clamp(16px, 1.3vw, 18px);
  }

  .img {
    /* position: relative;
    top: -100px; */
    max-width: 800px;
  }

  .desc-box {
    max-width: 700px;
    line-height: 1.6;
  }

  .stack-items {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: flex-start;
  }

  .stack-items span {
    display: inline-block;
    color: black;
    /* margin: 0.25rem; */
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    letter-spacing: 2px;
    font-size: 16px;
    background-color: var(--clr-primary);
  }
`

export default ProjectPage
