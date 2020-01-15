import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Navbar from '../components/Navbar';
import BackgroundElement from '../components/BackgroundElement';

export default () => {
    return (<div>
            <BackgroundElement letter={'0'} />
            <div css={{
                alignItems: 'center',
                maxHeight: '100vh',
                textAlign: 'left',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1
            }}>
            
            <Navbar />
            
            </div>
    </div>)
    
}

