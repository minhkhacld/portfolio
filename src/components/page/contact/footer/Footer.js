import React from 'react';
import { FaEnvelope, FaMapMarked, FaMobileAlt } from 'react-icons/fa';
import { Col, ColCenter, RowCenter, RowLeft } from '../../../kits/stucture/component.stucture';
import SocialNetwork from '../network/SocialNetwork';
import './Footer.css';

const Footer = () => {
    return (
        <RowLeft className="contact-footer">
            <ColCenter className="footer-logo">
                <img src={require('../../../../assets/picture/logo.png')} alt="logo" className="footer-logo-picture" />
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
                <RowLeft className="footer-contact-media">
                    <FaMapMarked className="contact-media-icon" />
                    <a className="contact-media-text" href="https://goo.gl/maps/tqDBgbc6t4qvt8668">Cai Lay, Tien Giang, Vietnam</a>
                </RowLeft>
            </Col>
            <Col className="footer-social">
                <RowLeft className="footer-contact-title">Follow me at:</RowLeft>
                <RowLeft>
                    <SocialNetwork />
                </RowLeft>
            </Col>

        </RowLeft>

    )
}

export default Footer