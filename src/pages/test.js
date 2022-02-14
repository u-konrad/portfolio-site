import React from "react"
import styled from "styled-components"

const TestPage = () => {
  return (
    <Wrapper>
      <div className="outer-container">
        <div className="nav"><p>LOGO</p></div>
      </div>
      <div className="outer-container">
        <div className=" full-width"></div>
      </div>
      <div className="outer-container">
        <div className="full-bleed"></div>
      </div>
      <div className="outer-container">
        <div className=" left"></div>
        <div className=" right"></div>
      </div>
      <div className="outer-container">
        <div className=" bleed-left"></div>
        <div className=" bleed-right"></div>
      </div>
      <div className="outer-container">
        <div className="left test">
          <p>some text</p>
        </div>
        <div className=" bleed-right"></div>
      </div>
    </Wrapper>
  )
}

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

  & div > div {
    height: 200px;
    margin-bottom: 2rem;
  }

  .test {
    display: grid;
    place-items: center;
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
  .bleed-right {
    grid-column: 1/4;
    border: 1px solid red;
  }

  .inner-container {
    display: block;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
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

export default TestPage
