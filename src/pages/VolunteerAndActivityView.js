import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { stringWithNewLine, mediaMaxWidth } from '../util/util';
import { lightMasterColor, lightBlue, masterLowlightColor, hilightBlueBackgroundColor, lowlightBlueBackgroundColor } from '../appConstant';
import RolesView from './RolesView';

export default (props) => {
    const { changePageFunc } = props;
    const rolesPage = <RolesView changePageFunc={changePageFunc} />
    return (<div>
        <div onClick={() => {
            changePageFunc(rolesPage)
        }}
        css={{ position: 'absolute', fontSize: '0.8em',right: '30px', padding: '0 20px', background: lowlightBlueBackgroundColor, border: `1px solid ${lightMasterColor}`, color: lightBlue, transition: '0.5s', cursor: 'pointer', ['&:hover']: { background: hilightBlueBackgroundColor, borderColor: 'white', color: 'white'}}}>
            Back to Roles
        </div>
        <div css={{ paddingTop: '40px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', textAlign: 'left'}}>
            {volunteeringAndActivityList.map((item, index) => {
                return (
                    <div key={index} 
                        css={{
                            width: '100%',
                            padding: '0 20px'
                        }}>
                        <div css={{ position: 'absolute', width: 'fit-content', fontWeight: '900', fontSize: '0.8em', padding: '0 20px', backgroundImage: 'linear-gradient(#ffcd40,#ab7600)', color: masterLowlightColor}}>
                            {item.period}
                            <div css={{ position: 'absolute', width: '27px', height: '27px', backgroundImage: 'linear-gradient(to bottom right,#ffcd40,#ab7600)', right: '-14px', top: '6px', transform: 'rotate(45deg)'}}></div>
                        </div>
                        <div css={{ color: 'rgba(255,255,255,0.8)', margin: '20px 0', border: '1px solid #ffd15a', padding: '40px 20px 20px 20px', overflow: 'scroll', background: '#0d253e', transition: '0.5s', ['&::-webkit-scrollbar']: { display: 'none'}, ['&:hover']: { background:'#1c518a', color: '#ffcd40' } }}>
                            <div css={{ fontWeight: '900', fontSize: '1.2em', lineHeight: '1.2em'}}>{item.role}</div>
                            <div css={{ fontSize: '0.8em', lineHeight: '1.2em', fontStyle: 'oblique', margin: '10px 0 20px 0'}}>@{item.organization}</div>
                            <div css={{fontSize: '0.8em', lineHeight: '1.6em'}}>{stringWithNewLine(item.description)}</div>
                        </div>
                    </div>
                );
            })}
        </div>
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