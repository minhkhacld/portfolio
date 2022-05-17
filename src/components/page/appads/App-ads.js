import React from 'react'
import raw from '../../../app-ads.txt';

const Appads = () => {

    const [adTxt, setAdsTxt] = React.useState("");
    fetch(raw)
        .then(r => r.text())
        .then(text => {
            console.log('text decoded:', text);
            setAdsTxt(text);
        });

    return (
        <div style={{ width: '100%', height: '100%', paddingTop: '50px', paddingLeft: '1rem', backgroundColor: 'white' }}>
            {adTxt}
        </div>
    )
}

export default Appads