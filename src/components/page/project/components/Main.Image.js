import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';


const MainImage = ({ src, offset, speed, width, marginLeft }) => {
    return (
        <ParallaxLayer offset={offset} speed={speed} style={{ display: 'block' }} >
            <img src={src} style={{ width: width, marginLeft: marginLeft }} className="pro-main-img" />
        </ParallaxLayer>
    )
}

export default MainImage