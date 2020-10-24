import React from 'react';
import styled, {keyframes} from "styled-components";

const resize = keyframes`
    0% {
        font-size: 72px;
    }
    
    50% {
        font-size: 84px;
    }
    
    100% {
        font-size: 72px;
    }
`;

const Text = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: ${props => props.theme.light};
    color: ${props => props.theme.dark};
    font-family: 'Over the Rainbow', cursive;
    font-size: 72px;
    animation: ${resize} 1.6s linear infinite;
    opacity: ${props => props.appReady ? '0' : '1'};
    visibility: ${props => props.appReady ? 'hidden':'visible'};
    transition: opacity 0.8s linear 0.4s, visibility 0.8s linear 0.4s;
    z-index: 5000;
`;

const Loader = (props) => {
  return (
    <Text appReady={props.appReady}>KHBlogs</Text>
  );
}

export default Loader;