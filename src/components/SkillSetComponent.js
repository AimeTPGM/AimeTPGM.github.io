import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default (props) => {
    const { skillSet } = props;
    const renderLabel = (item) => {
        return (<li 
            css={{ 
                fontSize: '0.3em', 
                padding: '0 10px', 
                lineHeight: '3em',
                borderRadius: '15px', 
                background: '#1c5189', 
                margin: '0 10px 10px 0',
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