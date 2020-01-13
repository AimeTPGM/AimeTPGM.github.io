import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaMaxWidth } from '../util/util';
import { colorScheme } from '../appConstant';
import resume from '../assets/pankamol-srikaew-resume-2020.pdf';

export default () => (
    <div css={{
        alignItems: 'center',
        maxHeight: '100vh',
        textAlign: 'left',
        overflow: 'hidden'
    }}>
        <div css={{ position: 'absolute', zIndex: '1', fontSize: '100vh', lineHeight: '80vh', color: colorScheme.secondaryBgColor, fontWeight: 'bold', marginLeft: '-20px'}}>{'{'}</div>
        <div css={{ [mediaMaxWidth(768)]: { display: 'none' }, position: 'absolute', zIndex: '1', right: 0, fontSize: '100vh', lineHeight: '80vh', color: colorScheme.secondaryBgColor, fontWeight: 'bold', marginRight: '-20px'}}>{'}'}</div>
        <div css={{ 
            [mediaMaxWidth(768)]: { width: '60%', textAlign: 'left' }, 
            position: 'absolute', width: '50%', left: 0, right: 0, margin: 'auto', marginTop: '25vh', zIndex: 2, textAlign: 'center'}}>
            <div css={{ 
                [mediaMaxWidth(768)]: { fontSize: '2em' },
                fontSize: '4em', fontWeight: 'bold', color: colorScheme.topicTextColor
                }}>My name is</div>
            <div css={{ [mediaMaxWidth(768)]: { fontSize: '3em' },
                fontSize: '5em', fontWeight: 'bold', textTransform: 'uppercase', margin: '20px 0'}}>Pankamol Srikaew</div>
            <div css={{ fontsize: '2em', fontWeight: 'bold', color: colorScheme.secondaryTextColor, marginBottom: '80px'}}>This is my journey as a developer</div>

            <div 
                onClick={() => { window.open(resume);}}
                css={{fontsize: '2em', fontWeight: 'bold',  margin: 'auto', color: colorScheme.topicTextColor, padding: '10px 20px', border: '2px solid '+colorScheme.topicTextColor, width: 'fit-content', cursor: 'pointer'}}>
                My Resume →
            </div>
        </div>
        
    </div>
)

