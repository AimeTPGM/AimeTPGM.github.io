import { React } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { mediaMaxWidth } from '../util/util';
import { Link } from 'react-router-dom';

export default () => {
    const contact = [
        { icon: faLinkedin, link: 'https://www.linkedin.com/in/aimetpgm/' },
        { icon: faGithub, link: 'https://github.com/AimeTPGM' },
        { icon: faFacebook, link: 'https://www.facebook.com/aimetpgm' },
        { icon: faEnvelope, link: 'mailto:sr.pankamol@gmail.com?Subject=Hey!%20I%20found%20you%20from%20github%20page.'}
    ]

    return (
   
        <div css={{ 
            [mediaMaxWidth(768)]: { fontSize: '1em' },
            fontSize: '2em', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Link to="/summary">
            <div css={{textTransform: 'uppercase'}}>
                <div>Pankamol</div><div>Srikaew</div>
            </div>
            </Link>
            <div>
                <ul css={{ listStyle: 'none', display: 'flex', padding: 0, margin: 0}}>
                {contact.map(item => {
                    return (<li css={{ [mediaMaxWidth(768)]: { marginRight: '10px', fontSize: '1.3em' }, marginRight: '20px'}}>
                        <a href={item.link} target="_blank">
                            <FontAwesomeIcon icon={item.icon}/>
                        </a>
                    </li>)
                })}

                <li css={{ [mediaMaxWidth(768)]: { marginRight: '10px' }, marginRight: '20px', fontSize: '0.8em', alignSelf: 'center'}}>
                        <a css={{
                            }} 
                            href={'https://aimetpgm.github.io/blog'} target="_blank">
                            {'blog'}
                        </a>
                    </li>
                </ul>
            </div>
        </div>);
}