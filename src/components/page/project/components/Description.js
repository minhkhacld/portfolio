import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import { Col, ColCenter, RowCenter } from '../../../kits/stucture/component.stucture';

const Description = ({ offset, speed, width, marginLeft, data }) => {
    return (
        <ParallaxLayer offset={offset} speed={speed} style={{ opacity: 1 }} >
            <RowCenter style={{ width: width, marginLeft: marginLeft }} className='pro-details' >
                <Col className="pro-details-left">
                    {/* <h4 className='pro-app-name'>App name: {data.appName}</h4> */}
                    <article className="pro-artical">
                        <h6 className="pro-artical-title">Description</h6>
                        <p className="pro-artical-phara">
                            {data.des}
                        </p>
                    </article>
                    <article className="pro-artical">
                        <h6 className="pro-artical-title">Technologies and Tools</h6>
                        {data.details.length > 0 ?
                            data.details.map((text, i) => (
                                <p className="pro-artical-phara" key={i}>
                                    - {text}
                                </p>
                            ))
                            : null}
                    </article>
                </Col>
                <ColCenter className="pro-details-right">
                    <a href={data.link} className="pro-details-right-link">
                        <img src={data.picture} alt={'icon'} width={'70%'} />
                    </a>
                </ColCenter>
            </RowCenter>
        </ParallaxLayer>
    )
}

export default Description