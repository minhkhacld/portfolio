
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from '../../../kits/stucture/component.stucture';
import RotateFrame from './textaniamtion/Rotate.Frame';
import TextAnimation from './textaniamtion/Text.Animation';
import TitleAnimation from './textaniamtion/Title.Animation';
import './Quote.css'

const Quote = () => {

    const navigate = useNavigate()
    const _onGoToContact = () => {
        navigate("/projects");
    }


    return (
        <Col className="skill-quote">
            <RotateFrame />
            <TitleAnimation />
            <TextAnimation />
            <div onClick={() => _onGoToContact()} className="skill-quote-link">Let's make something special</div>
        </Col >
    )
}

export default Quote