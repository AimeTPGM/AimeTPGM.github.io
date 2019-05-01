import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { lightMasterColor, linkColor, masterHilightColor, masterLowlightColor } from '../appConstant';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import resume from '../assets/resume.pdf';

export default () => {
    return (<div css={{padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <ul css={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '1.5em',
            lineHeight: 0,
            padding: 0
        }}>
            {contact.map(item => {
                return (<li css={{ margin: '10px'}}>
                    <a css={{
                            color: linkColor,
                            ['&:hover']: { color: masterHilightColor }
                        }} 
                        href={item.link} target="_blank">
                        <FontAwesomeIcon icon={item.icon}/>
                    </a>
                </li>)
            })}
        </ul>
        <div onClick={() => {
                window.open(resume);
            }}
            css={{ padding: '10px 20px', backgroundImage: 'linear-gradient(#ffcd40,#ab7600)', color: masterLowlightColor, fontWeight: '700', borderRadius: '50px', margin: '10px', cursor: 'pointer', border: '1px solid #ab7600', transition: '0.5s',
            ['&:hover'] : {
            boxShadow: '1px 1px 10px 1px #6f4e03',
            color: '#fff1d3',
            border: '1px solid #ecc873'
            }}}>Resume</div>
    </div>)
}

const contact = [
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/aimetpgm/' },
    { icon: faGithub, link: 'https://github.com/AimeTPGM' },
    { icon: faFacebook, link: 'https://www.facebook.com/aimetpgm' },
    { icon: faEnvelope, link: 'mailto:sr.pankamol@gmail.com?Subject=Hey!%20I%20found%20you%20from%20github%20page.'}
]