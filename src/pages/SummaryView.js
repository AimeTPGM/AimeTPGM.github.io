import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Navbar from '../components/Navbar';
import BackgroundElement from '../components/BackgroundElement';
import MainHeader from '../components/MainHeader';
import Timeline from '../components/Timeline';
import SubHeaderWithDesc from '../components/SubHeaderWithDesc';
import { HashLink as Link } from 'react-router-hash-link';

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
            }}>
            
            <Navbar />
            <div css={{ padding: '20px' }}>
                <div>
                    <MainHeader textElement={getWorkAndExperiencesHeader()} />
                    <Timeline />
                </div>

                <Link to="/recommendation#navbar">
                <div>
                    
                    <MainHeader textElement={'Recommendation'} />
                    <SubHeaderWithDesc headerText={'Ryan Clemens'} desc={'Development Manager at Allianz Technology Thailand'} />
                </div>
                </Link>

                <Link to="/activity#navbar">
                <div>
                    <MainHeader textElement={'Activities'} />
                    <SubHeaderWithDesc headerText={'Seminar, Instructor, Volunteering'} />
                </div>
                </Link>

                <Link to="/aboutme#navbar">
                <div css={{paddingBottom: '50px'}}>
                    <MainHeader textElement={'About Me'} />
                    <SubHeaderWithDesc headerText={'Profile and contact'} />
                </div>
                </Link>
            </div>
            
            
            </div>
    </div>)
    
}

