import React from 'react';
import styled, { keyframes } from 'styled-components';
import useScreenSize from '../../../../kits/media/Device.Measuring';

const AnimatedText = ({ text }) => {

    const screenSize = useScreenSize();
    const rendertext = text.split("");

    const animation = keyframes`
   from { opacity: 0; transform: translateY(-200px)  skewX(10deg) skewY(10deg) rotateZ(100deg); filter: blur(10px); }
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
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        color:var(--lightBlue);
        font-size:${screenSize.isXSmall || screenSize.isSmall ? 40 : screenSize.isMedium ? 60 : 80}px;
        font-weight:bold;
        z-index:1;   
    }    
    `

    const _onHoverTextAnimated = (index, item) => {
        const text = document.getElementById(`animted-text-${index}-${item}`);
        text.style.color = 'red';
    }

    const _onLeaveText = (index, item) => {
        const text = document.getElementById(`animted-text-${index}-${item}`);
        text.style.color = 'var(--lightBlue)';
    }


    return (
        <Wraper style={{ marginBottom: '30px' }}>
            {rendertext.map((item, index) => {
                return (
                    <span key={index}
                        id={`animted-text-${index}-${item}`}
                        className="animated-text-span"
                        onMouseOver={() => _onHoverTextAnimated(index, item)} onMouseLeave={() => _onLeaveText(index, item)}
                        style={{
                            marginLeft: rendertext[index] === " " ? 12 : 0,
                        }}>{
                            item !== "K" ? item :
                                <img
                                    className="animated-text-logo"
                                    src={require('../../../../../assets/picture/smallLogo.png')} alt="logo" style={{
                                        height: screenSize.isXSmall || screenSize.isSmall ? 30 : 45,
                                    }} />
                        }</span>
                )
            })}
        </Wraper>
    )
}

export default AnimatedText