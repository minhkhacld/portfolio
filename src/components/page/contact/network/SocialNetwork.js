import React from 'react';
import github from '../../../../assets/picture/contact/github.png';
import instagram from '../../../../assets/picture/contact/instagram.png';
import { ColCenter } from '../../../kits/stucture/component.stucture';
import facebook from '../.././../../assets/picture/contact/facebook.png';
import { useTransition, animated, config } from 'react-spring';
import './SocialNetwork.css'

const SocialNetwork = () => {
    const social = [
        { name: "Facebook", piture: facebook, link: 'https://www.facebook.com/phamminh.kha/' },
        { name: "Instagram", piture: instagram, link: 'https://www.instagram.com/minhkhacld/?hl=en' },
        { name: "Github", piture: github, link: 'https://github.com/minhkhacld' },
    ]

    const transitions = useTransition(true, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        delay: 500,
        config: config.molasses,
    })

    return transitions(({ opacity }) => <>
        {
            social.map((item, index) => {
                return (
                    <ColCenter className='contact-social-picFrame' key={index}>
                        <animated.a href={item.link} style={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',
                            opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
                        }}>
                            <img src={item.piture} alt={item.name} className='contact-social-picture' />
                        </animated.a>
                    </ColCenter>
                )
            })
        }
    </>
    )
}

export default SocialNetwork