import { React } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { mediaMaxWidth } from '../util/util';

export default () => {
    const contact = [
        { icon: faLinkedin, link: 'https://www.linkedin.com/in/aimetpgm/' },
        { icon: faGithub, link: 'https://github.com/AimeTPGM' },
        { icon: faFacebook, link: 'https://www.facebook.com/aimetpgm' },
        { icon: faEnvelope, link: 'mailto:sr.pankamol@gmail.com?Subject=Hey!%20I%20found%20you%20from%20github%20page.'}
    ]

    return (<div css={{ 
        [mediaMaxWidth(768)]: { fontSize: '1em' },
        fontSize: '2em', display: 'flex', padding: '20px', alignItems: 'center', justifyContent: 'space-between'}}>
        <div css={{textTransform: 'uppercase'}}>
            <div>Pankamol</div><div>Srikaew</div>
        </div>
        <div>
            <ul css={{ listStyle: 'none', display: 'flex', padding: 0, margin: 0}}>
            {contact.map(item => {
                return (<li css={{ [mediaMaxWidth(768)]: { marginRight: '10px', fontSize: '1.3em' }, marginRight: '20px'}}>
                    <a css={{
                        }} 
                        href={item.link} target="_blank">
                        <FontAwesomeIcon icon={item.icon}/>
                    </a>
                </li>)
            })}
            </ul>
        </div>
    </div>);
}