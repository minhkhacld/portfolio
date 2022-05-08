import React from 'react'
import { ColCenter, RowCenter } from '../../../kits/stucture/component.stucture';
import avatar from '../../../../assets/picture/contact/cog.png'
import './Message.css';
import { useSpring, animated, config, useTransition } from 'react-spring';

const Message = () => {

    const opacity = useSpring({
        from: { opacity: 0, color: 'white', },
        to: { opacity: 1, color: 'black', fontWeight: 'bold', },
        delay: 500,
        config: config.molasses,
    });

    const string = "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


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