import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const styles = {
        frame: {
            position: 'fixed',
            zIndex: 1000,
            bottom: '3%',
            right: '3%',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: '#112B3C',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
        },
        icon: {
            color: 'var(--lightBlue)',
            fontSize: 25,
        }
    }

    const onGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div style={styles.frame} onClick={onGoToTop} id="scroll-to-top">
            <FaArrowAltCircleUp style={styles.icon} />
        </div>
    )
}

export default ScrollToTop