import React from 'react'
import { FaSoundcloud } from 'react-icons/fa';
import { RowEvenly, Col } from '../stucture/component.stucture';
import '../Kits.css';

const Sound = () => {
    const [play, setPlay] = React.useState(false);

    const playSound = () => {
        if (!play) {
            document.getElementById('myAudio').play();
            setPlay(true);
        } else {
            document.getElementById('myAudio').pause();
            setPlay(false);
        }
    }

    const styles = {
        sound: {
            icon: { color: !play ? 'red' : '#08fdd8', },
            text: { fontSize: 15, color: '#fff' },
            on: { fontSize: 15, color: play ? '#08fdd8' : 'red', cursor: 'pointer' },
            off: { fontSize: 15, color: !play ? 'red' : '#08fdd8', cursor: 'pointer' },
        }
    }
    return (
        <RowEvenly className="cv-sound" onClick={() => playSound()}>
            <audio id="myAudio" src={require("../../../assets/sound/sound.mp3")}></audio>
            <FaSoundcloud size={30} style={styles.sound.icon} />
            <p style={styles.sound.text}>Sound</p>
            {play ?
                <p style={styles.sound.on}>ON</p>
                :
                <p style={styles.sound.off}>OFF</p>
            }
            <Col className="cv-sound-popup">
                <p className="sound-popup-text">
                    Battle Metal by Alexander Nakarada | https://www.serpentsoundstudios.com
                </p>
                <a className="sound-popup-text" href="https://www.chosic.com/free-music/all/"> Music promoted by https://www.chosic.com/free-music/all/
                </a>
                <p className="sound-popup-text"> Attribution 4.0 International (CC BY 4.0)
                </p>
                <a className="sound-popup-text" href=" https://creativecommons.org/licenses/by/4.0/">https://creativecommons.org/licenses/by/4.0/</a>
            </Col>
        </RowEvenly>
    )
}

export default Sound