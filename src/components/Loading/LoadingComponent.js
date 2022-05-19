import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const bounce = keyframes`
     0% {
         width: 10px;
         height: 10px;
         opacity: 0.9;
         -webkit-transform: translateY(0);
       }
       100% {
         width: 24px;
         height: 24px;
         opacity: 0.1;
         -webkit-transform: translateY(+21px);
       }
`;

const AnimationContainer = styled.div`
  text-align: center;

  span {
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    margin: 20px 10px;
    background: black;
    border-radius: 50px;
    animation: ${bounce} 0.9s infinite alternate;
    -webkit-animation: ${bounce} 0.9s infinite alternate;
    -moz-animation: ${bounce} 0.9s infinite alternate;
  }
  span:nth-of-type(2) {
    animation-delay: 0.3s;
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
  }
  span:nth-of-type(3) {
    animation-delay: 0.6s;
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
  }
`;

const LoadingComponent = () => (
  <AnimationContainer>
    <span />
    <span />
    <span />
  </AnimationContainer>
);

export default React.memo(LoadingComponent);
