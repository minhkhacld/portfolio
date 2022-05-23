import React from "react";
import styled, { keyframes } from "styled-components";

export default function TextAnimation() {

    const animation = keyframes`
0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
50% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
100% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
`;
    const quote = `In my career path. I have been working in both manuafacturing process and software development. I have a strong interesting in web and mobile development which related to improve manufacturing processes.
     `
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
                <span key={index} className="quote-text">{item === "web" || item === "mobile" ? <strong style={{color: 'var(--lightBlue)' }}>{item}</strong> : item}</span>
            ))}
        </Wrapper>
    );
}
