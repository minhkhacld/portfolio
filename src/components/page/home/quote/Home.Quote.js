import React from 'react';
import TitleAnimation from '../../skill/quote/textaniamtion/Title.Animation';
import TextAnimation from '../../skill/quote/textaniamtion/Text.Animation';
import { useNavigate } from 'react-router-dom';
import RoundFrame from './frame/Round.Frame';

const HomeQuote = () => {
    const navigate = useNavigate()
    const _onGoToContact = () => {
        navigate("/projects");
    }


    return (
        <div className="home-quote">
            <RoundFrame delay={0.3} />
            <RoundFrame delay={0.5} />
            <RoundFrame delay={0.6} />
            <TitleAnimation />
            <TextAnimation />
            <div onClick={() => _onGoToContact()} className="home-quote-link">Contact me</div>
        </div>
    )
}

export default HomeQuote