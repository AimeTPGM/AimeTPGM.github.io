import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Navbar from '../components/Navbar';
import BackgroundElement from '../components/BackgroundElement';
import MainHeader from '../components/MainHeader';
import Timeline from '../components/Timeline';
import SubHeaderWithDesc from '../components/SubHeaderWithDesc';
import { Link } from 'react-router-dom';

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

            <Link to="/recommendation">
            <div>
                
                <MainHeader textElement={'Recommendation'} />
                <SubHeaderWithDesc headerText={'Ryan Clemens'} desc={'Development Manager at Allianz Technology Thailand'} />
            </div>
            </Link>

            <div>
                <MainHeader textElement={'Activities'} />
                <SubHeaderWithDesc headerText={'Seminar, Instructor, Volunteering'} />
            </div>

            <div css={{paddingBottom: '50px'}}>
                <MainHeader textElement={'About Me'} />
                <SubHeaderWithDesc headerText={'Profile and contact'} />
            </div>
            
            
            </div>
    </div>)
    
}

