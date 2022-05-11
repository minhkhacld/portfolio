import React from 'react';
import './Web.css';
import Child from '../mobile/child/Child';
import { FaDesktop } from 'react-icons/fa';

const Web = () => {

    const data = [
        {
            appName: 'Sewing Line Layout',
            des: `The web application that allow user create dynamic Sewing Line Layout for mass prodution. The app aim to help user make layout more faster, easier and accuracy and then use it as a key tool for line balancing improvement. The app is also help manager to manage the work by providing data visualization and so all...`,
            details: `ReactJs, DevExtreme, Redux`,
            link: "",
            picture: [
                require('../../../../assets/picture/project/webapp/layout/dashboard.PNG'),
                require('../../../../assets/picture/project/webapp/layout/layout.png'),
                require('../../../../assets/picture/project/webapp/layout/lblchart.PNG'),
                require('../../../../assets/picture/project/webapp/layout/chart.PNG'),
            ],
            icon: require('../../../../assets/picture/project/webapp/layout/ic.png'),
            feature: require('../../../../assets/picture/project/webapp/layout/feature.png'),
            publishDate: "2021-10-31",
            projectType: 'Company project',
        },
        {
            appName: 'Support Center',
            des: `In mass production, we always need every thing go fast and continuously. Support Center was built to provide a simple way to send and respone the request among each the partment in the company. At Support Center, every can be measured, from the time the requester send a request asking for helping to the time the solver react and solve that request. All will be collected and presentated`,
            details: `ReactJs, DevExtreme, Redux, Socket.IO`,
            link: "",
            picture: [
                require('../../../../assets/picture/project/webapp/spct/dashboard.PNG'),
                require('../../../../assets/picture/project/webapp/spct/summary.PNG'),
                require('../../../../assets/picture/project/webapp/spct/pending.PNG'),
                require('../../../../assets/picture/project/webapp/spct/detail.PNG'),
            ],
            icon: require('../../../../assets/picture/project/webapp/spct/ic.png'),
            feature: require('../../../../assets/picture/project/webapp/spct/feature.png'),
            publishDate: "2022-04-30",
            projectType: 'Company project',
        },
    ]

    return (
        <div className="projects-web">
            <div className="projects-title">
                <FaDesktop className="title-icon" />
                <div className="title-text">Web</div>
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

export default Web;