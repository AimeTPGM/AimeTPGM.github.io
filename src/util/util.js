import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export const mediaMaxWidth = (width) => { return `@media (max-width: ${width}px)` }

export const stringWithNewLine = (str, style) => {
    const pStyle = !!style ? style : {};
    const strs = str.split('\n')

    

    return strs.map(item => {
        if (isHeader(item)) {
            return (<h2 css={{ textIndent: '50px', ...pStyle}}>{removeSyntax(item)}</h2>); 
        }
        return (<p css={{ textIndent: '50px', ...pStyle}}>{item}</p>); 
        }
    );
}

export const isHeader = (item) => {
    return item.includes('<*') && item.includes('*>');
}

export const removeSyntax = (item) => {
    if (!isHeader(item)) {
        return item;
    }
    const boldPattern = /<\*.*\*>/;
    const textToTransform = item.match(boldPattern);
    return textToTransform.map(item => {
        return item.substring(2,item.length-2);
    });
}