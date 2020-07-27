import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaMaxWidth } from '../util/util';
import DownloadResume from '../components/DownloadResume';
import ViewContainer from './ViewContainer';
import { colorScheme } from '../appConstant';
import ContactComponent from '../components/ContactComponent';

export default () => {
    const bgEleStyle = { fontSize: '45em', marginTop: '-270px', marginLeft: '-40px', [mediaMaxWidth(768)]: { fontSize: '40em', marginTop: '-180px', marginLeft: '-40px', } }
    const getContent = () => {
        return (<div css={{ [mediaMaxWidth(768)]: { padding: '50px 10px' }, padding: '60px 300px' }}>
            <div css={{ fontSize: '2em' }}>
                <div>My name is</div>
                <div>Pankamol Srikaew</div>
            </div>
            
            <div css={{ color: colorScheme.secondaryTextColor}}>Software Developer from Thailand</div>
            <div css={{fontFamily: 'Montserrat', marginTop: '70px', lineHeight: '1.6em'}}>
                <div css={{ textIndent: '50px', lineHeight: '2em' }}>
                    <div>I intensely passionate on development the full project life cycle from the start to delivery - and standing by 24/7 available every one week a month for project's production on-call support to make sure that our application is fully on servicing</div>
                    <div>Besides contributing in project delivery, I would claim my cultural view of working to have a high priority on team's well-being and support all teammates' of their career growth. It's my pleasure to jump or hand in to the area that the my team needs supports to overcome the issue they are encountering. Also helping to improve our working process and facilitate my teammates to fully accomplish their in-hand tasks without worries.</div>
                    
                </div>
                <div css={{ marginTop: '30px'}}><span>If the qualities that has been mentioned above sounds like "someone you're looking for", let's find out how we could connect and contribute in the team.</span></div>
            </div>
            <div css={{ display: 'flex', justifyContent: 'center', fontSize: '2em', marginTop: '30px'}}>
                <ContactComponent />
            </div>
        </div>)
    }
    const getHeader = () => {
        return (<div><div>About Me</div><div>Official Introduction</div></div>)
    }
    return (<div>
        <ViewContainer
            bgLetter={';'} 
            bgEleStyle={bgEleStyle} 
            mainHeaderText={getHeader()} 
            content={getContent()}
            />
            <DownloadResume />
    </div>)
}
