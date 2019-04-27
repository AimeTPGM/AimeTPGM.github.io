import React, { PureComponent } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaMaxWidth, stringWithNewLine } from '../util/util';
import { lightBlue } from '../appConstant';
import hotsLogo from '../assets/hots-logo.png';
import hsLogo from '../assets/hs-logo.png';
import dota2Logo from '../assets/dota-2-logo.png';
import pubgLogo from '../assets/pubg-logo.png';

export default () => {
    const textHilightStyle = { color: lightBlue, fontWeight: '900' }
    const gameLogoStyle = { width: '150px', objectFit: 'contain' }
    return (
    <div css={{ display: 'flex', padding: '0 0 30px 0', display: 'flex', flexDirection: 'column' }}>
        <div>
            <img css={{ 
                width: '250px',
                borderRadius: '50%',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                margin: 'auto',
            }} src={'https://avatars0.githubusercontent.com/u/5433758?s=460&v=4'} />
        </div>
        <div css={{background: 'rgba(0,0,0,0.3)', marginTop: '125px', paddingTop: '130px'}}>
        <div css={{ ...textHilightStyle }}><strong>Welcome Visitor!</strong></div>
        <div css={{ ...textHilightStyle }}>This is Aime :)</div>
        <div css={{ fontSize: '0.8em', lineHeight: '1.3em', padding: '0 5vw 80px 5vw', textAlign: 'left', [mediaMaxWidth(768)]: { }}}>
            <p>I'm a <span css={{ ...textHilightStyle }}>software developer</span> from Thailand.</p>
            <p>If you ask me about my preferred specific role, I like to be <span css={{ ...textHilightStyle }}>FullStack dev</span> since we can rotate around the new area we haven't seen it yet. <span css={{ ...textHilightStyle }}>I like to talk and meet with people</span>, exchange the opinions and perspectives. Don't be afraid! <span css={{ ...textHilightStyle }}>My contact is in the bottom of the site.</span></p>
            <p>Nice to see all my old friends and new faces. Let's have a little chat ;)</p>
            <p><span css={{ fontWeight: '900', color: '#ffcd40'}}>P.S. I also play some games on my free<del css={{ color: 'rgba(255, 63, 63, 0.65)'}}>day</del>time </span>(I'm quite hardcore gamer tho :P) <span css={{ ...textHilightStyle }}>COME AND JOIN!</span></p>
            <div css={{ display: 'flex', alignItems: 'center', justifyContent: 'center', [mediaMaxWidth(768)]: { flexDirection: 'column' }}}>
                <a href="https://heroesofthestorm.com/" target="_blank"><img css={{ ...gameLogoStyle }} src={hotsLogo} /></a>
                <a href="https://playhearthstone.com/en-us/" target="_blank"><img css={{ ...gameLogoStyle }} src={hsLogo} /></a>
                <a href="https://www.dota2.com" target="_blank"><img css={{ ...gameLogoStyle, margin: '20px 0'}} src={dota2Logo} /></a>
                <a href="#"><img css={{ ...gameLogoStyle }} src={pubgLogo} /></a>
            </div>
        </div>
        
        </div>
    </div>);
}