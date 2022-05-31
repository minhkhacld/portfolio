import React from 'react';
import github from '../../../../assets/picture/contact/github.png';
import instagram from '../../../../assets/picture/contact/instagram.png';
import { ColCenter } from '../../../kits/stucture/component.stucture';
import facebook from '../.././../../assets/picture/contact/facebook.png';

import './SocialNetwork.css'

const SocialNetwork = () => {
    const social = [
        { name: "Facebook", piture: facebook, link: 'https://www.facebook.com/phamminh.kha/' },
        { name: "Instagram", piture: instagram, link: 'https://www.instagram.com/minhkhacld/?hl=en' },
        { name: "Github", piture: github, link: 'https://github.com/minhkhacld' },
    ]

    return (<>
        {
            social.map((item, index) => {
                return (
                    <ColCenter className='contact-social-picFrame' key={index}>
                        <a href={item.link} style={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%',                          
                        }}>
                            <img src={item.piture} alt={item.name} className='contact-social-picture' />
                        </a>
                    </ColCenter>
                )
            })
        }
    </>
    )
}

export default SocialNetwork