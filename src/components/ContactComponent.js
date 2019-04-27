import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { lightMasterColor, linkColor, masterHilightColor } from '../appConstant';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default () => {
    return (<div css={{padding: '20px'}}>
        <ul css={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1.5em',
            lineHeight: 0,
            padding: 0,
            margin: '0 0 30px 0'
        }}>
            {contact.map(item => {
                return (<li css={{ margin: '10px'}}>
                    <a css={{
                            color: linkColor,
                            ['&:hover']: { color: masterHilightColor }
                        }} 
                        href={item.link}>
                        <FontAwesomeIcon icon={item.icon}/>
                    </a>
                </li>)
            })}
        </ul>
    </div>)
}

const contact = [
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/aimetpgm/' },
    { icon: faGithub, link: 'https://github.com/AimeTPGM' },
    { icon: faFacebook, link: 'https://www.facebook.com/aimetpgm' },
    { icon: faEnvelope, link: 'mailto:sr.pankamol@gmail.com?Subject=Hey!%20I%20found%20you%20from%20github%20page.'}
]