import React from 'react'
import styled, { keyframes } from 'styled-components';

const RoundFrame = ({ delay }) => {
    let fromColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let toColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
    let fromWidth = Math.floor(Math.random() * 2 + 1) + "px";
    let toWidth = Math.floor(Math.random() * 2 + 2) + "px"
    const animation = keyframes`
 from {transform: rotate(-90deg); border-radius: 42% 58% 39% 61% / 39% 37% 63% 61% ;border: ${fromWidth} solid ${fromColor}}
 to {transform: rotate(360deg);  border-radius: 77% 23% 39% 61% / 61% 37% 63% 39% ; border: ${toWidth} solid ${toColor}}
`
    const Wrapper = styled.div`
 position: absolute;
 top:5px;
 left:5px;
 margin-top:5px;
 margin-left:5px;
 padding:5px;
 animation-name:${animation};
 animation-duration:20s;
 animation-delay:${delay}s;
 animation-timing-function:linear;
 animation-fill-mode: forwards;
 animation-iteration-count: infinite;   
 width: 90%;
 height: 500px;   
 z-index:-1;
 `
    return (
        <Wrapper>
        </Wrapper>
    )
}

export default RoundFrame