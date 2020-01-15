import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { stringWithNewLine, mediaMaxWidth } from '../util/util';
import ViewContainer from '../components/ViewContainer';

export default () => {
    const bgEleStyle = { fontSize: '50em', marginTop: '-270px', marginLeft: '-150px', [mediaMaxWidth(768)]: { fontSize: '40em', marginTop: '-180px', marginLeft: '-120px', } }
    
    const getContent = () => {
        return (<div>content</div>)
    }
    return (<div>
        <ViewContainer 
            bgLetter={'&'} 
            bgEleStyle={bgEleStyle} 
            mainHeaderText={'Activities'} 
            content={getContent()}
            footerText={'About Me'}
            footerNavigate={'/aboutme'}
            />
    </div>)
}


const volunteeringAndActivityList = [
    {
        period: 'April 2019',
        role: 'Reception and General Facilitator',
        organization: 'Stupid Hackathon#3',
        description: 'Volunteering staff and individual sponsor for holding Stupid Hackathon#3 event in Thailand',
    },
    {
        period: 'Mar 2019',
        role: 'Developer',
        organization: 'Code for Thailand',
        description: 'contribute to elect.thematter.co website for visualizing Thailand\'s election vote result in real-time',
    },
    {
        period: 'Jun 2018',
        role: 'Speaker',
        organization: 'Code Mania Thailand#111',
        description: 'Speaker of Code Mania Thailand #111 with topic "Django#101: all you need to know for getting started"',
    },
    {
        period: 'Mar 2018',
        role: 'Coach',
        organization: 'Django Girl',
        description: 'Django girls is a free programming workshop for women and welcome all beginners who wants to learn how to code from the beginning until they can publish their website online to PythonAnywhere.com using Python Django.\nDjango girls is a non-profit organization and events are organized by volunteers in different places of the world.',
    },
    {
        period: 'Nov 2017',
        role: 'Joint Speaker',
        organization: 'Code Mania Thailand#110',
        description: 'Joint speaker of Thai Pangsakulyanont in Code Mania Thailand Opening Session with the topic "Contribution to Opensource"',
        img: [
            ''
        ]
    },
    {
        period: 'Sept 2016 - Aug 2017',
        role: 'Public Relation',
        organization: 'Association of Thai Student in Korea (ATSK), Seoul, South Korea',
        description: 'Designed invitation posters and publicised news and announcements of activities for Thai students in South Korea on social media',
        img: [
            ''
        ]
    },
    {
        period: 'Aug 2016',
        role: 'Volunteer Staff',
        organization: 'Royal Thai Embassy, Seoul',
        description: 'Volunteering as a staff at "Thai Restaurant Application" stand in Thai Festival 2016, Seoul, South Korea'
    },
    {
        period: 'Mar 2016',
        role: 'English-Thai Game Dialogue Translator',
        organization: 'Stardew Valley Thailand',
        description: 'Contribute to translate Stardew Valley game modification from English to Thai\n- Early Launch: Full conversation dialog of Alex\n- Patch 1.06: After marriage dialog of Haley'
    },
    {
        period: 'May 2013',
        role: 'Staff',
        organization: 'Kasetsart University',
        description: 'Staff of eXceed camp #10 - programming camp'
    }
]