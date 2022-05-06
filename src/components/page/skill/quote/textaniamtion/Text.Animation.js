import React from "react";
import styled, { keyframes } from "styled-components";
import { useLocation } from 'react-router-dom';

export default function TextAnimation() {

    const location = useLocation();
    const pathname = location.pathname.split("/")[1];

    const animation = keyframes`
0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
50% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
100% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
`;

    const quote = pathname === "skill" ?
        `S Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        :
        `H Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
        ;
    const reactArray = quote.split(" ");
    const Wrapper = styled.span`
        display: inline-block;
        span {
          opacity: 1;
          display: inline-block;
          animation-name: ${animation};
          animation-duration: 7s;
          animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
          animation-fill-mode: forwards;
           animation-iteration-count: 1;
        }     
      `;

    return (
        <Wrapper style={{ marginBottom: '20px' }}>
            {reactArray.map((item, index) => (
                <span key={index} style={{ color: 'white', marginLeft: '5px', fontWeight: 'bold', fontSize: '25px' }}>{item}</span>
            ))}
        </Wrapper>
    );
}
