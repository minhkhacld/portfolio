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
                <Col className="exp-job">
                    <RowLeft className="exp-title">Software Developer</RowLeft>
                    <RowLeft className="exp-company">Bodynits Tien Giang</RowLeft>
                    <RowLeft className="exp-time">2021-Now</RowLeft>
                    <p className="exp-description">- Participate in analysis, design and product development using ReactJS, NodeJS.
                    </p>
                    <p className="exp-description">- Build high performance, scalable components for company websites.</p>
                    <p className="exp-description">- Participate in designing and building application.</p>
                    <p className="exp-description">- Develop new user-facing features using JavaScript and ReactJS that meet large number of users.</p>
                    <p className="exp-description">- Build reusable components and front-end libraries for future use.</p>
                    <p className="exp-description">- Follow coding standards, write automated test cases, deployment scripts.</p>
                    <p className="exp-description">- Assist in improving app architectures – Explore existing systems, determines areas of maintainability scalability extensibility.</p>
                </Col>
                <Col className="exp-job">
                    <RowLeft className="exp-title">Industrial Engineer</RowLeft>
                    <RowLeft className="exp-company">Hansae TG - Premier Global VN - Techtronic Industry</RowLeft>
                    <RowLeft className="exp-time">2015-2021</RowLeft>
                    <p className="exp-description">- Create Work instruction, Layout, Equipment arrangement, Work flow for Mass production, train production team how to build product, control WIP.
                    </p>
                    <p className="exp-description">- Run engineering build & pilot production to build new samples. Define manpower, output and ST BOM of new products.</p>
                    <p className="exp-description">- Execute time study & improve LOB for production line, continuously do improvement projects to increase efficiency & save the cost.</p>
                    <p className="exp-description">-  With  <strong style={{ color: 'var(--lightBlue)' }}>ambitious</strong> to improve manufacturing processes. I have <strong style={{ color: 'var(--lightBlue)' }}>learned programming</strong> and <strong style={{ color: 'var(--lightBlue)' }}>started to build</strong> small projects during this period time to support production such as: Scan machine QR code, Production output tracking, Change over tracking app...</p>


                </Col>
            </div>
        </Col>
    )
}

export default SkillRange