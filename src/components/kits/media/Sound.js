import React from 'react'
import { FaSoundcloud } from 'react-icons/fa';
import { RowEvenly } from '../stucture/component.stucture';

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
            <audio id="myAudio" src={require("../../../assets/sound/sound.wav")}></audio>
            <FaSoundcloud size={30} style={styles.sound.icon} />
            <p style={styles.sound.text}>Sound</p>
            {play ?
                <p style={styles.sound.on}>ON</p>
                :
                <p style={styles.sound.off}>OFF</p>
            }
        </RowEvenly>
    )
}

export default Sound