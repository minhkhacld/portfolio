import React from 'react';
import styled, { keyframes } from "styled-components";
import { FaSync } from 'react-icons/fa'

const RotateInstruction = ({ screenSize }) => {

    const animation = keyframes`
0% {width:150px}
50% {width:180px}
100% {width:150px}
`
    const Wrapper = styled.div`
height:30px;
border-radius:5px;
animation:${animation} 2s ease-in-out infinite;
position:absolute;
bottom:5%;
right:5%;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
div{
    color:var(--lightBlue);
    margin-left:5px;
}
`
    return (
        <Wrapper>
            <FaSync color="var(--lightBlue)" size={14} />
            <div><span>Use</span><span> {screenSize.isXSmall || screenSize.isSmall ? "finger" : "mouse"}</span> <span>to rote me</span></div>
        </Wrapper>
    )
}

export default RotateInstruction