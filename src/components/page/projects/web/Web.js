import React from "react";
import Child from "../mobile/child/Child";
import { FaDesktop } from "react-icons/fa";

const Web = () => {
  const data = [
    {
      appName: "EBS",
      des: `The fully responsive web application use by Motives employees and managers for payment request, approvals, inspections and compliance activities.`,
      details: `ReactJs, DevExtreme, Redux, Redux Toolkit, IndexedDB, MeterialUI...`,
      website: "",
      picture: [
        require("../../../../assets/picture/project/webapp/ebs/home.png"),
        require("../../../../assets/picture/project/webapp/ebs/menu.png"),
        require("../../../../assets/picture/project/webapp/ebs/approve.png"),
        require("../../../../assets/picture/project/webapp/ebs/inspection.png"),
        require("../../../../assets/picture/project/webapp/ebs/step1.png"),
        require("../../../../assets/picture/project/webapp/ebs/step4.png"),
        require("../../../../assets/picture/project/webapp/ebs/step5.png"),
        require("../../../../assets/picture/project/webapp/ebs/step6.png"),
        require("../../../../assets/picture/project/webapp/ebs/step8.png"),
      ],
      icon: require("../../../../assets/picture/project/webapp/m_logo.webp"),
      feature: require("../../../../assets/picture/project/webapp/bds/feature.png"),
      publishDate: "TBD",
      projectType: "Company project",
      isNew: true,
    },
    {
      appName: "M Real Estate",
      des: `The web application for buying, selling and cashflow management of Real Estate products that use internally by 4M Green Power company...`,
      details: `ReactJs, DevExtreme, Redux, Redux Toolkit, MeterialUI...`,
      website: "",
      picture: [
        require("../../../../assets/picture/project/webapp/bds/destop_home1.png"),
        require("../../../../assets/picture/project/webapp/bds/destop_detail1.png"),
        require("../../../../assets/picture/project/webapp/bds/destop_detail2.png"),
        require("../../../../assets/picture/project/webapp/bds/destop_detail3.png"),
        require("../../../../assets/picture/project/webapp/bds/home1.png"),
        require("../../../../assets/picture/project/webapp/bds/home2.png"),
        require("../../../../assets/picture/project/webapp/bds/list1.png"),
        require("../../../../assets/picture/project/webapp/bds/detail2.png"),
        require("../../../../assets/picture/project/webapp/bds/detail3.png"),
        require("../../../../assets/picture/project/webapp/bds/detail4.png"),
        require("../../../../assets/picture/project/webapp/bds/detail5.png"),
      ],
      icon: require("../../../../assets/picture/project/webapp/m_logo.webp"),
      feature: require("../../../../assets/picture/project/webapp/bds/feature.png"),
      publishDate: "2022-09-31",
      projectType: "Company project",
    },
    {
      appName: "Sewing Line Layout",
      des: `The web application that allow user create dynamic Sewing Line Layout for mass prodution. The app aim to help user make layout more faster, easier and accuracy and then use it as a key tool for line balancing improvement. The app is also help manager to manage the work by providing data visualization and so all...`,
      details: `ReactJs, DevExtreme, Redux`,
      website: "",
      picture: [
        require("../../../../assets/picture/project/webapp/layout/dashboard.PNG"),
        require("../../../../assets/picture/project/webapp/layout/layout.png"),
        require("../../../../assets/picture/project/webapp/layout/lblchart.PNG"),
        require("../../../../assets/picture/project/webapp/layout/chart.PNG"),
      ],
      icon: require("../../../../assets/picture/project/webapp/layout/ic.png"),
      feature: require("../../../../assets/picture/project/webapp/layout/feature.png"),
      publishDate: "2021-10-31",
      projectType: "Company project",
    },
    {
      appName: "Support Center",
      des: `In mass production, we always need every thing go fast and continuously. Support Center was built to provide a simple way to send and respone the request among each department in the company. At Support Center, everything can be measured, from the time the requester send a request asking for help to the time the solver react and solve that request. All of those activities will be collected and presentated`,
      details: `ReactJs, DevExtreme, Redux, Socket.IO`,
      website: "",
      picture: [
        require("../../../../assets/picture/project/webapp/spct/dashboard.PNG"),
        require("../../../../assets/picture/project/webapp/spct/summary.PNG"),
        require("../../../../assets/picture/project/webapp/spct/pending.PNG"),
        require("../../../../assets/picture/project/webapp/spct/detail.PNG"),
      ],
      icon: require("../../../../assets/picture/project/webapp/spct/ic.png"),
      feature: require("../../../../assets/picture/project/webapp/spct/feature.png"),
      publishDate: "2022-04-30",
      projectType: "Company project",
    },
    {
      appName: "Scan to Google Sheets",
      des: `A professional website that connect users and Scan to Google Sheets application. This web side tell Scan to Google Sheets every thing about the application in details`,
      details: `ReactJs, Tailwindcss, Material, Redux`,
      website: "https://stggs-minhkhacld.vercel.app/",
      picture: [
        require("../../../../assets/picture/project/webapp/stggs/feature.PNG"),
        require("../../../../assets/picture/project/webapp/stggs/features.PNG"),
        require("../../../../assets/picture/project/webapp/stggs/doc.PNG"),
        require("../../../../assets/picture/project/webapp/stggs/download.PNG"),
        require("../../../../assets/picture/project/webapp/stggs/pricing.PNG"),
        require("../../../../assets/picture/project/webapp/stggs/support.PNG"),
      ],
      icon: require("../../../../assets/picture/project/webapp/stggs/ic_launcher.png"),
      feature: require("../../../../assets/picture/project/webapp/stggs/feature.PNG"),
      publishDate: "2022-06-18",
      projectType: "Personal project",
    },
  ];

  return (
    <div className="projects-web">
      <div className="projects-title">
        <FaDesktop className="title-icon" />
        <div className="title-text">Web</div>
      </div>
      <div className="projects-content">
        {data.map((app, index) => {
          return <Child key={index} app={app} />;
        })}
      </div>
    </div>
  );
};

export default Web;
