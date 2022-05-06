import React from 'react';
// import { useSpring, animated, config, easings, useTransition } from 'react-spring'
// import { RowCenter } from '../stucture/component.stucture';
import styled, { keyframes } from "styled-components";

const Sending = ({ children }) => {

    // const { background, rotateZ } = useSpring({
    //     from: {
    //         background: '#F9FFA4',
    //         // rotateZ: 0,
    //     },
    //     to: {
    //         background: '#B4FF9F',
    //         // rotateZ: 360,
    //     },
    //     config: {
    //         duration: 2000,
    //         easing: easings.easeInOutQuart,
    //     },
    //     loop: true,
    // })

    //css for animation

    const string = "Sending...";
    const sendingext = string.split("");

    const animation = keyframes`
0% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
50% { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
100% { opacity: 0; transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(30deg); filter: blur(10px); }
`;
    let Wrapper = styled.span`
display: flex;
flex-direction: row;
justify-content: center;
align-item:center;
height:100%;
span {
opacity: 0;
display: inline-block;
animation-name: ${animation};
animation-duration: 3s;
animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
animation-fill-mode: forwards;
animation-iteration-count: 2;
color:black;
font-size:15px;
font-weight:bold;
text-align: center;
display:table;
margin-top: auto;
margin-bottom: auto;
}     
`;

    return (
        <Wrapper>
            {
                sendingext.map((item, index) => {
                    return (
                        <span key={index} style={{
                            animationDelay: `${1 * index / 10}s`,
                        }} >{item}</span>
                    )
                })
            }

        </Wrapper>
    )
}

export default Sending