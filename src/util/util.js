import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export const mediaMaxWidth = (width) => { return `@media (max-width: ${width}px)` }

export const stringWithNewLine = (str, style) => {
    const pStyle = !!style ? style : {};
    const strs = str.split('\n')
    return strs.map(item => {
        return (<p css={{ ...pStyle, textIndent: '50px'}}>{item}</p>); 
        });
}