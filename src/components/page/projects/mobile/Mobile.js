import React from 'react'
import './Mobile.css';
import Child from './child/Child';
import { FaMobileAlt } from 'react-icons/fa';

const Mobile = () => {

    const data = [
        {
            appName: 'Học Excel',
            des: `Học Excel is mobile application that provide for Vietnamese people the easy way to learn Excel. The app includes various lession such as: functions, chart, formating, data import and export, useful shortcuts,VBA...
            The app has also incldues youtube video learning courses that has made and published by me.`,
            details: `React native, Firebase, Youtube API`,
            link: "https://play.google.com/store/apps/details?id=com.hocexcel",
            picture: [
                require('../../../../assets/picture/project/hocexcel/feature.png'),
                require('../../../../assets/picture/project/hocexcel/home.png'),
                require('../../../../assets/picture/project/hocexcel/game.png'),
                require('../../../../assets/picture/project/hocexcel/lession.png'),
                require('../../../../assets/picture/project/hocexcel/youtube.png'),
            ],
            icon: require('../../../../assets/picture/project/hocexcel/ic_launcher.png'),
            feature: require('../../../../assets/picture/project/hocexcel/feature.png'),
            publishDate: "2021-11-12",
            projectType: 'Personal project',
        },
        {
            appName: 'Scan To Google Sheets',
            des: `Scan To Google Sheets was made to provide people who aim to use Google Sheets as tool for Inventory Management or Attendance tracking. The app allow user to generate, scan and send QR, Barcode with additional information to their own google sheets directly.
            The app has provide two difference versions. User can decide either to use Standard version or Premium version base on the need.
            `,
            details: `React native, Firebase, Google Sheets, Google App script`,
            link: "https://play.google.com/store/apps/details?id=com.scantogooglesheets",
            picture: [
                require('../../../../assets/picture/project/stggs/feature.png'),
                require('../../../../assets/picture/project/stggs/home.png'),
                require('../../../../assets/picture/project/stggs/dashboard.png'),
                require('../../../../assets/picture/project/stggs/qr.png'),
            ],
            icon: require('../../../../assets/picture/project/stggs/ic_launcher.png'),
            feature: require('../../../../assets/picture/project/stggs/feature.png'),
            publishDate: "2022-01-08",
            projectType: 'Personal project',
        },
        {
            appName: 'Play and Grow Animal',
            des: `Play and Grow Animal is the funny app and it was made for kids only. The app help kids learn the basic about sixty common animals by providing the knowleadge and funny game with attractive animations and sounds.`,
            details: `React native, Firebase`,
            link: "https://play.google.com/store/apps/details?id=com.playandgrowanimal",
            picture: [
                require('../../../../assets/picture/project/paga/feature.png'),
                require('../../../../assets/picture/project/paga/home.png'),
                require('../../../../assets/picture/project/paga/list.png'),
                require('../../../../assets/picture/project/paga/play.png'),
            ],
            icon: require('../../../../assets/picture/project/paga/ic_launcher.png'),
            feature: require('../../../../assets/picture/project/paga/feature.png'),
            publishDate: "2022-02-26",
            projectType: 'Personal project',
        },
        {
            appName: 'Stopwatch To Google Sheets',
            des: 'The app has made to provide user the orther way to measure and store timming data. If you want something that can help you to keep track your timming data but not only in the app local storage. Stopwatch To Google Sheet is a great app for you.',
            details: `React native, Firebase, Google Sheets, Google App script`,
            link: "https://play.google.com/store/apps/details?id=com.stopwatchtogooglesheets",
            picture:
                [
                    require('../../../../assets/picture/project/swtggs/feature.png'),
                    require('../../../../assets/picture/project/swtggs/home.png'),
                    require('../../../../assets/picture/project/swtggs/edit.png'),
                    require('../../../../assets/picture/project/swtggs/config.png'),
                ],
            icon: require('../../../../assets/picture/project/swtggs/ic_launcher.png'),
            feature: require('../../../../assets/picture/project/swtggs/feature.png'),
            publishDate: "2022-03-14",
            projectType: 'Personal project',
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