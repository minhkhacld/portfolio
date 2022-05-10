import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import Description from './components/Description';
import MainImage from './components/Main.Image';
import SubImage from './components/Sub.Image';
import './Project.css';

const Project = () => {

  const parallax = React.useRef(null);

  const hocExcel = {
    appName: 'Học Excel',
    des: 'Học Excel is.........................................',
    details: [
      "React native", "Firebase", "Youtube API"
    ],
    link: "https://play.google.com/store/apps/details?id=com.hocexcel",
    picture: require('../../../assets/picture/project/hocexcel/ic_launcher.png'),
  };

  const scantoSheets = {
    appName: 'Scan To Google Sheets',
    des: 'Scan To Google Sheets is.........................................',
    details: [
      "React native", "Firebase", "Google Sheets", "Google App script"
    ],
    link: "https://play.google.com/store/apps/details?id=com.scantogooglesheets",
    picture: require('../../../assets/picture/project/stggs/ic_launcher.png'),
  };

  const stopwatchtoGgSheets = {
    appName: 'Stopwatch To Google Sheets',
    des: 'Stopwatch To Google Sheets is.........................................',
    details: [
      "React native", "Firebase", "Google Sheets", "Google App script"
    ],
    link: "https://play.google.com/store/apps/details?id=com.stopwatchtogooglesheets",
    picture: require('../../../assets/picture/project/swtggs/ic_launcher.png'),
  }

  // const playandGrowAnimal = {
  //   appName: 'Play and Grow Animal',
  //   des: 'Play and Grow Animal is.........................................',
  //   details: [
  //     "React native", "Firebase",
  //   ],
  //   link: "https://play.google.com/store/apps/details?id=com.playandgrowanimal",
  //   picture: require('../../../assets/picture/project/paga/ic_launcher.png'),
  // };

  return (
    <div className="cv-projects" >

      {/* //buton */}
      {/* <RowLeft className="project-sticky">
        <RowEvenly className="project-sticky-frame">
          <ColCenter className="project-sticky-btn" onClick={() => parallax.current.scrollTo(1)}>
            <FaMobile className="project-sticky-icon" />
          </ColCenter>
          <ColCenter className="project-sticky-btn" onClick={() => parallax.current.scrollTo(4)}>
            <FaDesktop className="project-sticky-icon" />
          </ColCenter>
        </RowEvenly>
      </RowLeft> */}

      <Parallax ref={parallax} pages={6} style={{
        backgroundImage: `url(${require("../../../assets/picture/parallax/star.png")})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: '#1A1A1A', }} onClick={() => parallax.current.scrollTo(1)} />
        <ParallaxLayer offset={1} speed={0} style={{ backgroundColor: '#1A1A1A' }} onClick={() => parallax.current.scrollTo(2)} />
        <ParallaxLayer offset={2} speed={0} style={{ backgroundColor: '#1A1A1A' }} onClick={() => parallax.current.scrollTo(3)} />
        <ParallaxLayer offset={3} speed={0} style={{ backgroundColor: '#1A1A1A' }} onClick={() => parallax.current.scrollTo(4)} />
        <ParallaxLayer offset={4} speed={0} style={{ backgroundColor: '#1A1A1A', }} onClick={() => parallax.current.scrollTo(5)} />
        <ParallaxLayer offset={5} speed={0} style={{ backgroundColor: '#1A1A1A' }} onClick={() => parallax.current.scrollTo(6)} />
        <ParallaxLayer offset={6} speed={0} style={{ backgroundColor: '#1A1A1A' }} onClick={() => parallax.current.scrollTo(0)} />

        {/* --------Mobile part--------------------- */}
        <ParallaxLayer offset={0.25} speed={0.5} style={{ pointerEvents: 'none', }}>
          <p className="project-type-title">Mobile Applications</p>
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.5} style={{ pointerEvents: 'none' }}>
          <img src={require('../../../assets/picture/parallax/smartphone.png')} style={{ width: '15%', marginLeft: '10%' }} className="pro-img-smartphone" alt=""/>
          <img src={require('../../../assets/picture/parallax/app-development.png')} style={{ width: '10%', marginLeft: '80%' }} className="pro-img-prodevelopment" alt=""/>
        </ParallaxLayer>

        {/* Hoc Excel part */}
        <MainImage offset={1} speed={1} src={require('../../../assets/picture/project/hocexcel/home.png')} width={'25%'} marginLeft={'20%'} />
        <SubImage src={require('../../../assets/picture/project/hocexcel/font.png')} offset={1} speed={0.8} width={'15%'} marginLeft={'25%'} opacity={1} />
        <Description offset={1.45} speed={0.4} width={'40%'} marginLeft={'50%'} data={hocExcel} />
        <SubImage src={require('../../../assets/picture/project/hocexcel/youtube.png')} offset={1.01} speed={0.3} width={'10%'} marginLeft={'2%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/project/hocexcel/lession.png')} offset={1} speed={0.8} width={'12%'} marginLeft={'75%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/project/hocexcel/stats.png')} offset={1.2} speed={0.5} width={'5%'} marginLeft={'50%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/parallax/cloud.png')} offset={1.5} speed={0.6} width={'15%'} marginLeft={'6%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/parallax/cloud-computing.png')} offset={1.1} speed={0.6} width={'10%'} marginLeft={'60%'} opacity={0.4} />

        {/*Stggs part */}
        <MainImage offset={2} speed={1} src={require('../../../assets/picture/project/stggs/home.png')} width={'25%'} marginLeft={'65%'} />
        <SubImage src={require('../../../assets/picture/project/stggs/font.png')} offset={2.2} speed={0.3} width={'15%'} marginLeft={'30%'} opacity={1} />
        <Description offset={2.45} speed={0.4} width={'40%'} marginLeft={'5%'} data={scantoSheets} />
        <SubImage src={require('../../../assets/picture/project/stggs/dashboard.png')} offset={2.0} speed={0.5} width={'12%'} marginLeft={'10%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/project/stggs/qr.png')} offset={2.6} speed={0.5} width={'8%'} marginLeft={'50%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/parallax/cloud.png')} offset={2.1} speed={1} width={'15%'} marginLeft={'50%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/parallax/cloud-computing.png')} offset={2.8} speed={1} width={'10%'} marginLeft={'85%'} opacity={0.4} />

        {/*Swtggs part */}
        <MainImage offset={3} speed={1} src={require('../../../assets/picture/project/swtggs/home.png')} width={'25%'} marginLeft={'20%'} />
        <SubImage src={require('../../../assets/picture/project/swtggs/font.png')} offset={3} speed={0.3} width={'15%'} marginLeft={'25%'} opacity={1} />
        <Description offset={3.45} speed={0.4} width={'40%'} marginLeft={'50%'} data={stopwatchtoGgSheets} />
        <SubImage src={require('../../../assets/picture/project/swtggs/edit.png')} offset={3.0} speed={0.5} width={'12%'} marginLeft={'2%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/project/swtggs/config.png')} offset={3} speed={0.5} width={'7%'} marginLeft={'75%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/parallax/cloud.png')} offset={3.1} speed={1} width={'15%'} marginLeft={'50%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/parallax/cloud-computing.png')} offset={3.8} speed={1} width={'10%'} marginLeft={'85%'} opacity={0.4} />

        {/*Swtggs part */}
        <MainImage offset={4} speed={1} src={require('../../../assets/picture/project/swtggs/home.png')} width={'25%'} marginLeft={'20%'} />
        <SubImage src={require('../../../assets/picture/project/swtggs/font.png')} offset={3} speed={0.3} width={'15%'} marginLeft={'25%'} opacity={1} />
        <Description offset={4.45} speed={0.4} width={'40%'} marginLeft={'50%'} data={stopwatchtoGgSheets} />
        <SubImage src={require('../../../assets/picture/project/swtggs/edit.png')} offset={4.0} speed={0.5} width={'12%'} marginLeft={'2%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/project/swtggs/config.png')} offset={4} speed={0.5} width={'7%'} marginLeft={'75%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/parallax/planet.png')} offset={4.1} speed={0.2} width={'8%'} marginLeft={'50%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/parallax/satellite.png')} offset={4.7} speed={0.6} width={'5%'} marginLeft={'3%'} opacity={0.4} />
        <SubImage src={require('../../../assets/picture/parallax/cloud-computing.png')} offset={4.8} speed={0.5} width={'7%'} marginLeft={'85%'} opacity={0.4} />

        {/*------------------------------- Web app part---------------------------------------------- */}
        <ParallaxLayer offset={5} speed={0.5} style={{ pointerEvents: 'none', }}>
          <p className="project-type-title">Web Applications</p>
        </ParallaxLayer>
        <ParallaxLayer offset={5.2} speed={0.5} style={{ pointerEvents: 'none' }}>
          <img src={require('../../../assets/picture/parallax/ux.png')} style={{ width: '15%', marginLeft: '10%' }} className="pro-img-smartphone" alt="" />
          <img src={require('../../../assets/picture/parallax/code.png')} style={{ width: '10%', marginLeft: '80%' }} className="pro-img-prodevelopment" alt="" />
        </ParallaxLayer>

        {/*Layout part */}

      </Parallax >
    </div >
  )
}


export default Project