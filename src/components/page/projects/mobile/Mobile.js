import React from "react";
import "./Mobile.css";
import Child from "./child/Child";
import { FaMobileAlt } from "react-icons/fa";

const Mobile = () => {
  const data = [
    {
      appName: "Email Reader",
      des: `Read email, outlooks file with a single touch
🚩 What can you do with Email Reader: 
✅ Read any email file with extension .msg, .eml
✅ Save or share email file contents`,
      details: `React native, nodejs`,
      playStore: "https://play.google.com/store/apps/details?id=com.simplemsgreader",
      appStore: "https://apps.apple.com/us/app/email-reader/id6472813131",
      picture: [
        require("../../../../assets/picture/project/msg-reader/android_feature.png"),
        require("../../../../assets/picture/project/msg-reader/home.png"),
        require("../../../../assets/picture/project/msg-reader/email_contents.png"),
      ],
      icon: require("../../../../assets/picture/project/msg-reader/logo.png"),
      feature: require("../../../../assets/picture/project/msg-reader/android_feature.png"),
      publishDate: "2023-10-20",
      projectType: "Personal project",
      isNew: true,
    },
    {
      appName: "Sheets to App",
      des: `Powerful and fully customized mobile application for your business or any idea using spreadsheet
      * How's it works?
      1. Import your spreadsheet information to the app.
      2. Retrieving data from spreadsheet and display it.
      3. Add, update, or delete row within the app.
      4. And many more...`,
      details: `React native, Redux, Google Singin, App script, Google Sheets`,
      playStore: "",
      appStore: "https://apps.apple.com/us/app/sheets-to-app/id6444737044",
      picture: [
        require("../../../../assets/picture/project/sta/feature.png"),
        require("../../../../assets/picture/project/sta/productItem.png"),
        require("../../../../assets/picture/project/sta/itemDetail.png"),
        require("../../../../assets/picture/project/sta/dataTypes.png"),
        require("../../../../assets/picture/project/sta/itemDisplay.png"),
        require("../../../../assets/picture/project/sta/itemEdit.png"),
        require("../../../../assets/picture/project/sta/search.png"),
        require("../../../../assets/picture/project/sta/sheetMana.png"),
      ],
      icon: require("../../../../assets/picture/project/sta/logo.png"),
      feature: require("../../../../assets/picture/project/sta/feature.png"),
      publishDate: "2022-11-29",
      projectType: "Personal project",
      isNew: false,
    },
    {
      appName: "Scan To Google Sheets",
      des: `Scan To Google Sheets was made to provide people who aim to use Google Sheets as tool for Inventory Management and Attendance tracking. The app allow user to generate, scan and send QR, Barcode with additional information to their own google sheets directly.
              The app has provide two difference versions. User can decide either to use Standard version or Premium version base on the need.
              `,
      details: `React native, Redux, Firebase, Google Sheets, Google App script`,
      playStore:
        "https://play.google.com/store/apps/details?id=com.scantogooglesheets",
      appStore:
        "https://apps.apple.com/us/app/scan-to-google-sheets-premium/id1640838989",
      picture: [
        require("../../../../assets/picture/project/stggs/feature.png"),
        require("../../../../assets/picture/project/stggs/home.png"),
        require("../../../../assets/picture/project/stggs/Datatypes.png"),
        require("../../../../assets/picture/project/stggs/Editdata.png"),
        require("../../../../assets/picture/project/stggs/qr.png"),
        require("../../../../assets/picture/project/stggs/Remote.png"),
        require("../../../../assets/picture/project/stggs/scan.png"),
        require("../../../../assets/picture/project/stggs/searchpng.png"),
        require("../../../../assets/picture/project/stggs/Sheetconf.png"),
        require("../../../../assets/picture/project/stggs/sheetmn.png"),
      ],
      icon: require("../../../../assets/picture/project/stggs/ic_launcher.png"),
      feature: require("../../../../assets/picture/project/stggs/feature.png"),
      publishDate: "2022-01-08",
      projectType: "Personal project",
    },
    {
      appName: "Học Excel",
      des: `Học Excel is mobile application that provide for Vietnamese people the easy way to learn Excel. The app includes various lession such as: functions, charts, formating, data import and export, useful shortcuts, VBA...
            The app has also incldues youtube video learning courses which has created and published by me.`,
      details: `React native, Redux, Firebase, Youtube API`,
      playStore: "https://play.google.com/store/apps/details?id=com.hocexcel",
      appStore: "https://apps.apple.com/us/app/h%E1%BB%8Dc-excel/id1639901441",
      picture: [
        require("../../../../assets/picture/project/hocexcel/feature.png"),
        require("../../../../assets/picture/project/hocexcel/home.png"),
        require("../../../../assets/picture/project/hocexcel/game.png"),
        require("../../../../assets/picture/project/hocexcel/function.png"),
        require("../../../../assets/picture/project/hocexcel/tip.png"),
        require("../../../../assets/picture/project/hocexcel/video.png"),
        require("../../../../assets/picture/project/hocexcel/quickgame.png"),
        require("../../../../assets/picture/project/hocexcel/multigunc.png"),
        require("../../../../assets/picture/project/hocexcel/chart.png"),
        require("../../../../assets/picture/project/hocexcel/shortcut.png"),
      ],
      icon: require("../../../../assets/picture/project/hocexcel/ic_launcher.png"),
      feature: require("../../../../assets/picture/project/hocexcel/feature.png"),
      publishDate: "2021-11-12",
      projectType: "Personal project",
    },

    {
      appName: "Play and Grow Animal",
      des: `Play and Grow Animal is the funny app and it was made for kids only. The app help kids learn the basic about sixty common animals by providing the knowleadge and funny game with attractive animations and sounds.`,
      details: `React native, Redux, Firebase`,
      playStore:
        "https://play.google.com/store/apps/details?id=com.playandgrowanimal",
      appStore: "",
      picture: [
        require("../../../../assets/picture/project/paga/feature.png"),
        require("../../../../assets/picture/project/paga/home.png"),
        require("../../../../assets/picture/project/paga/list.png"),
        require("../../../../assets/picture/project/paga/play.png"),
      ],
      icon: require("../../../../assets/picture/project/paga/ic_launcher.png"),
      feature: require("../../../../assets/picture/project/paga/feature.png"),
      publishDate: "2022-02-26",
      projectType: "Personal project",
    },
    {
      appName: "Stopwatch To Google Sheets",
      des: "Stopwatch To Google Sheet is a great app for people who want to store timming data not only on the phone but also to cloud storage, especially in Google sheets. The app has made to provide users the simple way to measure and store timming data with just a few step to set up.",
      details: `React native, Redux, Firebase, Google Sheets, Google App script`,
      playStore:
        "https://play.google.com/store/apps/details?id=com.stopwatchtogooglesheets",
      appStore: "",
      picture: [
        require("../../../../assets/picture/project/swtggs/feature.png"),
        require("../../../../assets/picture/project/swtggs/home.png"),
        require("../../../../assets/picture/project/swtggs/edit.png"),
        require("../../../../assets/picture/project/swtggs/config.png"),
      ],
      icon: require("../../../../assets/picture/project/swtggs/ic_launcher.png"),
      feature: require("../../../../assets/picture/project/swtggs/feature.png"),
      publishDate: "2022-03-14",
      projectType: "Personal project",
    },
  ];

  return (
    <div className="projects-mobile">
      <div className="projects-title">
        <FaMobileAlt className="title-icon" />
        <div className="title-text">Mobile</div>
      </div>
      <div className="projects-content">
        {data.map((app, index) => {
          return <Child key={index} app={app} />;
        })}
      </div>
    </div>
  );
};

export default Mobile;
