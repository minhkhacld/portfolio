import React from 'react'
import { RowLeft, RowCenter, RowEvenly, ColCenter, ColLeft, Col } from '../../../kits/stucture/component.stucture';
import SocialNetwork from '../network/SocialNetwork';
import './Footer.css';
import { FaMobileAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <RowLeft className="contact-footer">
            <ColCenter className="footer-logo">
                <img src={require('../../../../assets/picture/contact/cog.png')} alt="logo" className="footer-logo-picture" />
            </ColCenter>
            <Col className="footer-contact">
                <RowCenter className="footer-contact-title">Contact me via:</RowCenter>
                <RowLeft className="footer-contact-media">
                    <FaEnvelope className="contact-media-icon" />
                    <a className="contact-media-text" href="mailto:pmkha92@gmail.com">pmkha92@gmail.com</a>
                </RowLeft>
                <RowLeft className="footer-contact-media">
                    <FaMobileAlt className="contact-media-icon" />
                    <a className="contact-media-text" href="tel:+84355210716">+84355210716</a>
                </RowLeft>
            </Col>
            <Col className="footer-social">
                <RowLeft className="footer-contact-title">Follow me:</RowLeft>
                <RowLeft>
                    <SocialNetwork />
                </RowLeft>
            </Col>
        </RowLeft>

    )
}

export default Footer