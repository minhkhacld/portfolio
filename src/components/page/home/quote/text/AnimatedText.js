import React from 'react';
import styled, { keyframes } from 'styled-components';
import useScreenSize from '../../../../kits/media/Device.Measuring';

const AnimatedText = ({ text, delay }) => {

    const screenSize = useScreenSize();

    const animation = keyframes`
   from { opacity: 0; transform: translateY(-200px) translateX(-200px)  translateX(-200px) skewX(10deg) skewY(10deg) rotateZ(100deg); filter: blur(10px); }
   to { opacity: 1; transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg); filter: blur(0px); }
    `;
    const Wraper = styled.span`
    display:inline-block;
    flex-direction:column;    
    width:100%;
    span{
        opacity: 0;
        display: inline-block;
        animation-name: ${animation};
        animation-duration: 3s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        color:var(--lightBlue);
        font-size:${screenSize.isXSmall || screenSize.isSmall ? 60 : 80}px;
        font-weight:bold;
    }    
    `
    const rendertext = text.split("");

    const _onHoverTextAnimated = (index) => {
        const text = document.getElementsByClassName(`animted-text-${index}`)[0];
        text.style.color = 'red';
    }

    const _onLeaveText = (index) => {
        const text = document.getElementsByClassName(`animted-text-${index}`)[0];
        text.style.color = 'var(--lightBlue)';
    }

    return (
        <Wraper style={{ marginBottom: '30px' }}>
            {rendertext.map((item, index) => {
                return (
                    <span key={index} className="home-quote-animated-text"
                        onMouseOver={() => _onHoverTextAnimated(index)} onMouseLeave={() => _onLeaveText(index)}
                        style={{
                            marginLeft: rendertext[index] === " " ? 12 : 0
                        }}>{
                            item !== "K" ? item :
                                <img src={require('../../../../../assets/picture/smallLogo.png')} alt="logo" style={{
                                    height: screenSize.isXSmall || screenSize.isSmall ? 43 : 60
                                }} />
                        }</span>
                )
            })}
        </Wraper>
    )
}

export default AnimatedText