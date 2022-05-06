import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Col, ColCenter, ColLeft, RowLeft } from '../../../kits/stucture/component.stucture';
import './SkillRange.css';


const SkillRange = () => {

    const animation_Fe = keyframes`
    from{width:0%}
    to{width:70%}
    `
    const animation_Be = keyframes`
    from{width:0%}
    to{width:50%}
    `
    const WrapperFE = styled.div`
    background-color:var(--organ);
    animation:${animation_Fe};
    animation-duration:2s;
    animation-delay:0.5s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    `
    const WrapperBE = styled.div`
    background-color:red;
    animation:${animation_Be};
    animation-duration:2s;
    animation-delay:1s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    `

    return (
        <Col className="skill-range">
            <ColCenter className="skill-progress">
                <ColLeft className="progress-group">
                    <RowLeft className="progress-group-text">Front End</RowLeft>
                    <RowLeft className="progress-group-bar">
                        <WrapperFE className="progress-bar-inner"
                        ></WrapperFE>
                    </RowLeft>
                </ColLeft>
                <ColLeft className="progress-group">
                    <RowLeft className="progress-group-text">Back End</RowLeft>
                    <RowLeft className="progress-group-bar">
                        <WrapperBE className="progress-bar-inner"
                        ></WrapperBE>
                    </RowLeft>
                </ColLeft>
            </ColCenter>
            <div className="skill-experience">
                <ColLeft className="exp-job">
                    <RowLeft className="exp-title">Software Developer</RowLeft>
                    <RowLeft className="exp-company">ABC EF</RowLeft>
                    <RowLeft className="exp-time">2021-2022</RowLeft>
                    <p className="exp-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                </ColLeft>
                <ColLeft className="exp-job">
                    <RowLeft className="exp-title">Software Developer</RowLeft>
                    <RowLeft className="exp-company">ABC EF</RowLeft>
                    <RowLeft className="exp-time">2021-2022</RowLeft>
                    <p className="exp-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                </ColLeft>

            </div>
        </Col>
    )
}

export default SkillRange