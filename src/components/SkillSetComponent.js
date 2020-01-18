import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colorScheme } from '../appConstant';

export default (props) => {
    const { skillSet } = props;
    const renderLabel = (item) => {
        return (<li 
            css={{ 
                fontFamily: 'Montserrat',
                fontSize: '0.8em', 
                padding: '0 15px', 
                lineHeight: '2.5em',
                borderRadius: '8px', 
                background: colorScheme.secondaryTextColor, 
                margin: '0 10px 10px 0',
                color: '#fff'
            }}>{item}</li>)
    }
    return (<ul css={{
        margin: 0,
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap', 
        justifyContent: 'left',
        padding: 0,
        width: '80%'
    }}>{skillSet.map(item => {
        return renderLabel(item);
    })}</ul>)
}