import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { stringWithNewLine, mediaMaxWidth } from '../util/util';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colorScheme } from '../appConstant';
import ViewContainer from './ViewContainer';

export default () => {
    const bgEleStyle = { fontSize: '50em', marginTop: '-270px', marginLeft: '-150px', [mediaMaxWidth(768)]: { fontSize: '40em', marginTop: '-180px', marginLeft: '-120px', } }
    
    const getContent = () => {
        return (<div css={{
            [mediaMaxWidth(768)]: {
                padding: '0 20px'
            },
            padding: '0 300px'
        }}>
            {recommendation.map((item) => {
                return (<a href={item.link} target="_blank">
                    <div css={{ marginTop: '50px'}}>
                        <div>
                            <div css={{fontSize: '2em', marginBottom: '20px'}}>{item.name} <FontAwesomeIcon icon={faLinkedin}/></div>
                            <div css={{color: colorScheme.secondaryTextColor, marginBottom: '10px'}}>{item.position}</div>
                            <div css={{color: colorScheme.secondaryTextColor, marginBottom: '10px'}}>{item.shortDescription}</div>
                        </div>
                        
                        <div css={{ fontFamily: 'Montserrat', lineHeight: '2em', marginTop: '100px'}}>{stringWithNewLine(item.recommendationText)}</div>
                    </div>
                </a>)
            })}
        </div>)
    }
    return (<div>
        <ViewContainer
            bgLetter={'X'} 
            bgEleStyle={bgEleStyle} 
            mainHeaderText={'Recommendation'} 
            content={getContent()}
            footerText={'Activities'}
            footerNavigate={'/activity'}
            />
    </div>)
}

const recommendation = [
    {
        name: 'Ryan Clemens',
        position: 'Development Manager',
        shortDescription: 'Business Agility and Technology Transformation Leadership',
        recommendationText: 'Pankamol (Aime) has worked for me as a Full Stack Developer in the Hexalite division of Allianz Technology since December 2017. She has truly distinguished herself by her performance during this time and achieved a promotion to Senior level based on her strong contributions during 2018. In July 2018 she earned a monthly award given to the strongest contributor within the whole division.\nAs a member of the team working on one of Allianz’ most advanced and diverse projects, Aime has had experience with and demonstrated skill with a wide variety of technologies in backend, frontend, database, mobile, DevOps and cloud platform areas. Whatever area needed attention, be it a new technology or problem or simply an area where her scrum team was unfamiliar, Aime was quick to jump in and get up to speed and working effectively. I believe she can handle anything the software development world has to throw at her!\nHowever, speaking of development skill only tells part of the story. I hired Pankamol because her natural enthusiasm and passion for software, technology and learning shone through in her interview, and has ever since – She is one of the best hiring decisions I’ve ever made. Aime exemplifies and infectiously spreads important characteristics for a high-performance team with those around her: honesty, open-communication, flexibility and adaptability and dynamic collaborative work.\nPlease _don’t_ hire Aime! I’d love to keep working with her forever. However, I’m excited to see what her future holds – I know it will be bright. ',
        date: 'April 17, 2019',
        link: 'https://www.linkedin.com/in/rtclemens/'
    }
]