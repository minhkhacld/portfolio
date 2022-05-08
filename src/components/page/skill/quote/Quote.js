
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col } from '../../../kits/stucture/component.stucture';
import RotateFrame from './textaniamtion/Rotate.Frame';
import TextAnimation from './textaniamtion/Text.Animation';
import TitleAnimation from './textaniamtion/Title.Animation';
import './Quote.css';
import RoundFrame from '../../home/quote/frame/Round.Frame';

const Quote = () => {

    const navigate = useNavigate()
    const _onGoToContact = () => {
        navigate("/projects");
    }

    return (
        <Col className="skill-quote">
            {/* <RotateFrame from={0} to={360} />
            <RotateFrame from={5} to={365} />
            <RotateFrame from={10} to={370} /> */}
            <RoundFrame delay={0.3} />
            <RoundFrame delay={0.5} />
            <RoundFrame delay={0.6} />
            <TitleAnimation />
            <TextAnimation />
            <div onClick={() => _onGoToContact()} className="skill-quote-link">Let's make something special</div>
        </Col >
    )
}

export default Quote