import React from 'react';
import { animated, config, useSpring } from 'react-spring';
import avatar from '../../../../assets/picture/contact/cog.png';
import { ColCenter, RowCenter } from '../../../kits/stucture/component.stucture';
import './Message.css';

const Message = () => {

    const opacity = useSpring({
        from: { opacity: 0, color: 'white', },
        to: { opacity: 1, color: 'black', },
        delay: 500,
        config: config.molasses,
    });

    const string = "I'm interested in full time job opportunities, especially large projects. However if you have other request or question. Don't hesitate to contact me!"


    return (
        <ColCenter className="contact-frame">
            <RowCenter className="contact-avatar-frame">
                <img src={avatar} alt={'Profile avatar'} className="contact-avatar-picture" />
            </RowCenter>
            <RowCenter className="contact-text-message">
                <animated.p className="contact-text-message-phara" style={opacity}>{string}</animated.p>
            </RowCenter>
        </ColCenter>
    )
}

export default Message