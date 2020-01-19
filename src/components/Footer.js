import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { HashLink as Link } from 'react-router-hash-link';
import { colorScheme } from '../appConstant';
import Arrow from './Arrow';

export default (props) => {
    const { text, navigateTo } = props;
    return (
        <Link to={navigateTo}>
        <div css={{ cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center', background: colorScheme.topicTextColor, color: '#fff'}}>
            <div css={{ padding: '20px', display: 'flex'}}>
            <div css={{marginRight: '10px', color: '#fff', fontFamily: 'Montserrat'}}>{text}</div>
            <Arrow  />
            </div>
            
        </div>
        </Link>
        )
}