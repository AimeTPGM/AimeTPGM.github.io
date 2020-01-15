import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaMaxWidth } from '../util/util';
import ArrowCircle from './ArrowCircle';
import { colorScheme } from '../appConstant';

export default (props) => {
    const { headerText, desc } = props;
    return (<div css={{ [mediaMaxWidth(768)]: { marginLeft: '60px'}, cursor: 'pointer'}}>
        <div css={{ [mediaMaxWidth(768)]: { margin: 0 }, display: 'flex', justifyContent: 'space-between', margin: '0 100px'}}>
            <div>
                <div>{headerText}</div>
                <div css={{ color: colorScheme.secondaryTextColor, fontSize: '0.8em', marginTop: '10px' }}>{desc}</div>
            </div>
            <ArrowCircle />
        </div>
        
        
    </div>)
}