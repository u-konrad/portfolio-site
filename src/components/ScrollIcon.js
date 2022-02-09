import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ScrollIcon = () => {
  return  <Wrapper >
  <Link className="icon-scroll" to="#portfolio"></Link>
</Wrapper>;
};

const Wrapper = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 5%;
    left: 0;

  .icon-scroll {
    width: 20px;
    height: 35px;
    box-shadow: inset 0 0 0 1.5px rgb(107, 107, 107);
    border-radius: 25px;

  }

  @media screen and (max-width: 992px) {
      display: none;
    
  }

  .icon-scroll:before {
    display: block;
    content: "";
    width: 4px;
    height: 8px;
    background: black;
    margin-left: 8px;
    margin-top: 3px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(23px);
    }
  }

`

export default ScrollIcon;
