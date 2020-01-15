import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Navbar from '../components/Navbar';
import BackgroundElement from '../components/BackgroundElement';
import MainHeader from '../components/MainHeader';
import Timeline from '../components/Timeline';

export default () => {
    const getWorkAndExperiencesHeader = () =>  {
        return (<div><div>{'Work &'}</div><div>{'Experiences'}</div></div>)
    }
    return (<div>
            <BackgroundElement letter={'0'} />
            <div css={{
                alignItems: 'center',
                maxHeight: '100vh',
                textAlign: 'left',
                position: 'relative',
                zIndex: 1,
                padding: '20px'
            }}>
            
            <Navbar />

            <div>
                <MainHeader textElement={getWorkAndExperiencesHeader()} />
                <Timeline />
            </div>
            
            
            </div>
    </div>)
    
}

