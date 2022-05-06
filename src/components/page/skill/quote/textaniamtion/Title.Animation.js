import React from 'react'
import styled, { keyframes } from "styled-components";
import { useLocation } from 'react-router-dom';

const TitleAnimation = () => {

    const location = useLocation();
    const pathname = location.pathname.split("/")[1];

    const string = pathname === "skill" ? "What  is  Lorem  Ipsum S?" : "What  is  Lorem  Ipsum H?";
    const title = string.split("");

    const animation = keyframes`
0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
50% { opacity: 0.8; transform: translateY(0px) skewX(1deg) skewY(5deg) rotateZ(1deg); filter: blur(0px); }
100% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
`;
    let Wrapper = styled.span`
    display: inline-block;
    span {
  opacity: 0;
  display: inline-block;
  animation-name: ${animation};
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  color:var(--lightBlue);
  margin-left:8px;
  font-size:35px;
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
        <Wrapper>
            {
                title.map((item, index) => {
                    return (
                        <span key={index} style={{
                            animationDelay: `${1 * index / 10}s`,
                        }} onMouseOver={() => _onHoverTextAnimated(index)} onMouseLeave={() => _onLeaveText(index)} className={`animted-text-${index}`}>{item}</span>
                    )
                })
            }
        </Wrapper>
    )
}

export default TitleAnimation