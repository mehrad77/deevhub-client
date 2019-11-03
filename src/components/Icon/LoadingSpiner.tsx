import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 26px;
  height: 26px;
  margin: auto;

  .wBall {
    position: absolute;
    width: 25px;
    height: 25px;
    opacity: 0;
    transform: rotate(225deg);
    animation: orbit 4.8425s infinite;
    .wInnerBall {
      position: absolute;
      width: 3px;
      height: 3px;
      background: rgb(0, 0, 0);
      left: 0px;
      top: 0px;
      border-radius: 3px;
    }
  }

  #wBall_1 {
  }

  #wBall_2 {
    animation-delay: 0.203s;
  }

  #wBall_3 {
    animation-delay: 0.4265s;
  }

  #wBall_4 {
    animation-delay: 0.6295s;
  }

  #wBall_5 {
    animation-delay: 0.843s;
  }

  @keyframes orbit {
    0% {
      opacity: 1;
      z-index: 99;
      transform: rotate(180deg);
      animation-timing-function: ease-out;
    }

    7% {
      opacity: 1;
      transform: rotate(300deg);
      animation-timing-function: linear;
      origin: 0%;
    }

    30% {
      opacity: 1;
      transform: rotate(410deg);
      animation-timing-function: ease-in-out;
      origin: 7%;
    }

    39% {
      opacity: 1;
      transform: rotate(645deg);
      animation-timing-function: linear;
      origin: 30%;
    }

    70% {
      opacity: 1;
      transform: rotate(770deg);
      animation-timing-function: ease-out;
      origin: 39%;
    }

    75% {
      opacity: 1;
      transform: rotate(900deg);
      animation-timing-function: ease-out;
      origin: 70%;
    }

    76% {
      opacity: 0;
      transform: rotate(900deg);
    }

    100% {
      opacity: 0;
      transform: rotate(900deg);
    }
  }
`;

const LoadingSpiner = () => {
  return (
    <Wrapper className="windows8">
      <div className="wBall" id="wBall_1">
        <div className="wInnerBall"></div>
      </div>
      <div className="wBall" id="wBall_2">
        <div className="wInnerBall"></div>
      </div>
      <div className="wBall" id="wBall_3">
        <div className="wInnerBall"></div>
      </div>
      <div className="wBall" id="wBall_4">
        <div className="wInnerBall"></div>
      </div>
      <div className="wBall" id="wBall_5">
        <div className="wInnerBall"></div>
      </div>
    </Wrapper>
  );
};

export default LoadingSpiner;
