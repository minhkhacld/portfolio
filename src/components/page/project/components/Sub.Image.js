import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';


const SubImage = ({ src, offset, speed, width, marginLeft, opacity }) => {
    return (
        <ParallaxLayer offset={offset} speed={speed} style={{ display: 'block', opacity: opacity }} >
            <img src={src} style={{ width: width, marginLeft: marginLeft }} className="pro-sub-img" alt="sub" />
        </ParallaxLayer>
    )
}

export default SubImage