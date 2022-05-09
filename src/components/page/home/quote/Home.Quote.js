import React from 'react';
import TitleAnimation from '../../skill/quote/textaniamtion/Title.Animation';
import TextAnimation from '../../skill/quote/textaniamtion/Text.Animation';
import { useNavigate } from 'react-router-dom';
import RoundFrame from './frame/Round.Frame';
import AnimatedText from './text/AnimatedText';
import { Col, ColCenter } from '../../../kits/stucture/component.stucture';
import RotateFrame from '../../skill/quote/textaniamtion/Rotate.Frame';

const HomeQuote = () => {
    const navigate = useNavigate()
    const _onGoToContact = () => {
        navigate("/contact");
    }

    const text1Str = "Hi,";
    const text2Str = "I'm Kha,";
    const text3Str = "web developer";

    return (
        <Col className="home-quote">
            <RotateFrame from={0} to={360} />
            <RotateFrame from={5} to={365} />
            <RotateFrame from={10} to={370} />
            <AnimatedText text={text1Str} delay={0} />
            <AnimatedText text={text2Str} delay={0.2 * text2Str.trim().split("").length} />
            <AnimatedText text={text3Str} delay={0.2 * text3Str.trim().split("").length} />
            <ColCenter onClick={() => _onGoToContact()} className="home-quote-link">Contact me</ColCenter>
        </Col>
    )
}

export default HomeQuote