import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa';

const ScrollToTopBig = () => {

    const onScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return (
        <div className="scroll-to-top-big-frame" id="scroll-to-top-big-frame" onClick={() => onScrollToTop()}>
            <FaArrowAltCircleUp className="scroll-to-top-big-icon" />
        </div>
    )
}

export default ScrollToTopBig