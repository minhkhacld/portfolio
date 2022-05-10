import React from 'react';
import styled, { keyframes } from "styled-components";

const TitleAnimation = () => {
    const string = "Me & Myselft"
    const title = string.trim().split("");

    const animation = keyframes`
0% { opacity: 0; transform: translateY(-200px) translateX(-200px)  translateX(-200px) skewX(10deg) skewY(10deg) rotateZ(100deg); filter: blur(10px); }
50% { opacity: 0.8; transform: translateY(0px) skewX(1deg) skewY(5deg) rotateZ(20deg); filter: blur(2px); }
100% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
`;
    let Wrapper = styled.span`
    display: inline-block;
    font-size:2rem;
    className:"quote-title";
    span {
  opacity: 0;
  display: inline-block;
  animation-name: ${animation};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-fill-mode: forwards;  
  animation-iteration-count: 1;
  color:var(--lightBlue);
  font-weight:bold;
  margin-bottom:20px;
  cursor:pointer;
}     
`;

    const _onHoverTextAnimated = (index) => {
        const text = document.getElementsByClassName(`animted-text-${index}`)[0];
        text.style.color = 'red';
    }

    const _onLeaveText = (index) => {
        const text = document.getElementsByClassName(`animted-text-${index}`)[0];
        text.style.color = 'var(--lightBlue)';
    }

    return (
        <Wrapper id="quote-title">
            {
                title.map((item, index) => {
                    return (
                        <span key={index} style={{
                            animationDelay: `${1 * index / 10}s`,
                            marginLeft: title[index] === " " ? 8 : 0
                        }} onMouseOver={() => _onHoverTextAnimated(index)} onMouseLeave={() => _onLeaveText(index)} className={`animted-text-${index}`}>{item}</span>
                    )
                })
            }
        </Wrapper>
    )
}

export default TitleAnimation