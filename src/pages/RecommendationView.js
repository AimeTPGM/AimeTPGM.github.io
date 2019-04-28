import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { stringWithNewLine, mediaMaxWidth } from '../util/util';
import { hilightBlueBackgroundColor, lowlightBlueBackgroundColor, masterHilightColor } from '../appConstant';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
    return (
            <div css={{ marginTop: '40px'}}>
            {recommendation.map((item, key) => {
            return (<div css={{ border: `1px solid rgba(255,255,255,0.8)`, padding: '20px 40px', fontSize: '0.8em', lineHeight: '1.7em', color: 'rgba(255,255,255,0.8)', margin: '30px 0', background: lowlightBlueBackgroundColor, transition: '0.5s', ['&:hover']: { borderColor: masterHilightColor, color: masterHilightColor, background:'#1c518a'}}}>
                <div>
                    <img css={{ borderRadius: '50%', position: 'absolute', left: 0, right: 0, margin: 'auto', marginTop: '-70px'}} src={item.img} />
                </div>
                <div css={{marginTop: '60px', paddingBottom: '150px', textAlign: 'left'}}>
                    <div css={{ color: 'white' }}>{stringWithNewLine(item.recommendationText)}</div>
                    <div css={{ maxWidth: '300px', position: 'absolute', right: '80px', bottom: '80px', cursor: 'pointer',
                            [mediaMaxWidth(768)]: {
                                right: 'auto',
                                bottom: 'auto'
                            } }}>
                        <a href="https://www.linkedin.com/in/rtclemens/" target="_blank" css={{ textDecoration: 'none', color: 'inherit'}}>
                        <div css={{ fontWeight: '900' }}>
                            {item.name}
                            <FontAwesomeIcon icon={faLinkedin} css={{ marginLeft: '10px'}}/>
                        </div>
                        <div>{item.position}</div>
                        <div>{item.shortDescription}</div>
                        </a>
                    </div>
                </div>
            </div>)
        })}</div>
    )
}

const recommendation = [
    {
        name: 'Ryan Clemens',
        position: 'Development Manager',
        shortDescription: 'Building leaders, organizations, and software at scale',
        recommendationText: 'Pankamol (Aime) has worked for me as a Full Stack Developer in the Hexalite division of Allianz Technology since December 2017. She has truly distinguished herself by her performance during this time and achieved a promotion to Senior level based on her strong contributions during 2018. In July 2018 she earned a monthly award given to the strongest contributor within the whole division.\nAs a member of the team working on one of Allianz’ most advanced and diverse projects, Aime has had experience with and demonstrated skill with a wide variety of technologies in backend, frontend, database, mobile, DevOps and cloud platform areas. Whatever area needed attention, be it a new technology or problem or simply an area where her scrum team was unfamiliar, Aime was quick to jump in and get up to speed and working effectively. I believe she can handle anything the software development world has to throw at her!\nHowever, speaking of development skill only tells part of the story. I hired Pankamol because her natural enthusiasm and passion for software, technology and learning shone through in her interview, and has ever since – She is one of the best hiring decisions I’ve ever made. Aime exemplifies and infectiously spreads important characteristics for a high-performance team with those around her: honesty, open-communication, flexibility and adaptability and dynamic collaborative work.\nPlease _don’t_ hire Aime! I’d love to keep working with her forever. However, I’m excited to see what her future holds – I know it will be bright. ',
        date: 'April 17, 2019',
        img: 'https://media.licdn.com/dms/image/C4E03AQFN4TS6eHpWIA/profile-displayphoto-shrink_100_100/0?e=1561593600&v=beta&t=aqPadkloXku1FOm2OHcRgi6_Q8iqPnebmTbO1x5Jzb0'
    }
]