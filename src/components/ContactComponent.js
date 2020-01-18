import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { contact } from '../data';
import { mediaMaxWidth } from '../util/util';

export default () => {
    return (
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
        </div>)
}