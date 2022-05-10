
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from '../../../kits/stucture/component.stucture';
import TextAnimation from './textaniamtion/Text.Animation';
import TitleAnimation from './textaniamtion/Title.Animation';
import './Quote.css';
import styled, { keyframes } from 'styled-components';
import { useLocation } from 'react-router-dom';

const Quote = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const path = location.pathname.split('/')[1];

    const _onGoToContact = () => {
        if (path === "") {
            document.getElementById("project-section").scrollIntoView({ block: 'start', behavior: 'smooth' });
        } else {
            navigate("/projects");
        }
    };

    const animationCloud = keyframes`
   0% {border-radius:64% 36% 21% 79% / 70% 42% 58% 30% ;opacity:0.3 }
    25% {border-radius:34% 66% 21% 79% / 32% 42% 58% 68%  ;opacity:0.6 }
    50% {border-radius:26% 74% 73% 27% / 79% 42% 58% 21%  ;opacity:1  }
    75% {border-radius:66% 34% 23% 77% / 54% 70% 30% 46%   ;opacity:0.9   }
    100% {border-radius:48% 52% 38% 62% / 36% 22% 78% 64%  ;opacity:0.7 }    
    `
    const CloudWrapper = styled.div`
left:10%;
width:80%;
z-index:-1;
position:absolute;
height:70%;
background-color: #743ad5;
animation-name:${animationCloud};
animation-duration:10s;
animation-delay:0s;
animation-timing-function:linear;
animation-fill-mode: forwards;
animation-iteration-count:infinite;
animation-direction:alternate;
box-shadow: box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;;
.quote-textBlock{
    opacity:1;
};
`

    //         <CloudWrapper CloudWrapper >
    //         <div className="quote-textBlock">
    //             {/* <RoundFrame delay={0.3} />
    //     <RoundFrame delay={0.5} />
    //     <RoundFrame delay={0.6} /> */}
    //             <TitleAnimation />
    //             <TextAnimation />
    //             <div onClick={() => _onGoToContact()} className="skill-quote-link">Let's make something special</div>
    //         </div>
    // </CloudWrapper >

    return (
        <Col className="skill-quote">
            <div style={{ width: '100%', height: '100%' }}>
                <CloudWrapper></CloudWrapper>
                <div className="quote-textBlock">
                    {/* <RoundFrame delay={0.3} />
                    <RoundFrame delay={0.5} />
                    <RoundFrame delay={0.6} /> */}
                    <TitleAnimation />
                    <TextAnimation />
                    <div onClick={() => _onGoToContact()} className="skill-quote-link">Let's make something special</div>
                </div>
            </div>


        </Col >
    )
}

export default Quote