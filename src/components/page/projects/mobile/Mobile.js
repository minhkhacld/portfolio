import React from 'react'
import './Mobile.css';
import Child from './child/Child';
import { FaMobileAlt } from 'react-icons/fa';

const Mobile = () => {

    const data = [
        {
            appName: 'Học Excel',
            des: 'Học Excel is.........................................',
            details: [
                "React native", "Firebase", "Youtube API"
            ],
            link: "https://play.google.com/store/apps/details?id=com.hocexcel",
            picture: [require('../../../../assets/picture/project/hocexcel/feature.png')],
        },
        {
            appName: 'Scan To Google Sheets',
            des: 'Scan To Google Sheets is.........................................',
            details: [
                "React native", "Firebase", "Google Sheets", "Google App script"
            ],
            link: "https://play.google.com/store/apps/details?id=com.scantogooglesheets",
            picture: [require('../../../../assets/picture/project/stggs/feature.png')],
        },
        {
            appName: 'Play and Grow Animal',
            des: 'Play and Grow Animal is.........................................',
            details: [
                "React native", "Firebase",
            ],
            link: "https://play.google.com/store/apps/details?id=com.playandgrowanimal",
            picture: [require('../../../../assets/picture/project/paga/feature.png')],
        },
        {
            appName: 'Stopwatch To Google Sheets',
            des: 'Stopwatch To Google Sheets is.........................................',
            details: [
                "React native", "Firebase", "Google Sheets", "Google App script"
            ],
            link: "https://play.google.com/store/apps/details?id=com.stopwatchtogooglesheets",
            picture: [require('../../../../assets/picture/project/swtggs/feature.png')],
        }
    ]

    return (
        <div className="projects-mobile">
            <div className="projects-title">
                <FaMobileAlt className="title-icon" />
                <div className="title-text">Mobile</div>
            </div>
            <div className="projects-content">
                {
                    data.map((app, index) => {
                        return (
                            <Child key={index} app={app} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Mobile