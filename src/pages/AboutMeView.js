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
                    <div>I intensely passionate on development the full project life cycle from the start to delivery - and even standing by, available, 24/7 one week a month for project's production on-call to make sure that the application is still on function and never blocking user's experiences</div>
                    <div>Besides developing an application, I can say that I'm really a person who concerns and takes excellent software development culture and team's well-being seriously. I'm always glad to jump into the area that the team's needed somebody who dedicate to handle any issues they are encountering, improve our working process and facilitate my teammates to fully accomplish their task without worries.</div>
                    <div>I also like to eat meat-meat and end the great day with an icecream.</div>
                    
                </div>
                <div css={{ marginTop: '30px'}}><span>If you're looking for a software developer with the skills I mentioned above, let's find out how I can contribute in your team.</span></div>
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
