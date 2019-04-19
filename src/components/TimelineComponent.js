import React, { PureComponent } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { lightBlue, masterColor } from '../appConstant';
import { mediaMaxWidth } from '../util/util';
class TimelineComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { activeItemIndex: timelineData.length-1 }
        
    }

    render() {
        const { activeItemIndex } = this.state;
        const activeItem = timelineData[activeItemIndex];
        return (
        <div>
            <div css={{display: 'flex', justifyContent: 'center'}}>
                {timelineData.map((item, i) => {
                    let divStyle = { 
                        color: 'white', 
                        padding: '15px', 
                        borderRadius: '50%',  
                        marginRight: '10px',
                        cursor: 'pointer',
                        [mediaMaxWidth(768)] : {
                            padding: '10px',
                            fontSize: '0.8em',
                            lineHeight: '35px'
                        }
                    };
                    if (i == activeItemIndex) {
                        divStyle = { 
                            ...divStyle,
                            background: lightBlue, 
                            color: masterColor
                        }
                    }
                    return (
                    <div>
                        <div css={{...divStyle}}
                        onClick={ () => {
                            this.setState({ activeItemIndex: i })
                        }}>{item.time}</div>
                    </div>)
                })}
            </div>
            <div 
                css={{ margin: '50px 0 20px 0'}}
                >
                <div>
                    <div>
                        <div 
                            css={{ 
                                fontSize: '1.5em', 
                                background: '#1c5189', 
                                borderRadius: '15px',
                                width: '50%', 
                                margin: 'auto', 
                                padding: '10px',
                                fontWeight: '900',
                                [mediaMaxWidth(768)] : {
                                    width: '80%', 
                                    fontSize: '1em'
                                }
                            }}
                        >
                            {activeItem.name}
                        </div>
                    </div>
                    <div 
                        css={{ fontWeight: '900', fontStyle: 'oblique', fontSize: '0.75em' }}
                        >@{activeItem.place}</div>
                </div>
                <div 
                    css={{
                        width: '50%', margin: 'auto', padding: '20px 0',
                        [mediaMaxWidth(768)] : {
                            width: '100%',
                            fontSize: '0.8em',
                            lineHeight: '1.8em'
                        }

                    }}
                    >
                    {activeItem.description}
                </div>
                <ul css={{
                    listStyle: 'none',
                    display: 'flex',
                    flexWrap: 'wrap', 
                    justifyContent: 'center',

                }}>{activeItem.tools.map(item => {
                    return (<li 
                        css={{ 
                            fontSize: '0.3em', 
                            padding: '0 10px', 
                            lineHeight: '3em',
                            borderRadius: '15px', 
                            background: '#1c5189', 
                            margin: '0 10px 10px 0',
                        }}>{item}</li>)
                })}</ul>
            </div>
        </div>)
    }
    
}

export default TimelineComponent;

const timelineData = [
	{
		name : "Intern",
        place : "Kookmin University, Seoul, South Korea",
        time: "2014",
		period : "Sept 2014 - Dec 2014",
		description : "Developed a website called Work Management Tool to manage project tasks from many country (Thailand and Korea are include) for development E-government system together, main responsibility on frontend development, sub-responsibility on backend development",
        tools : ['Bootstrap', 'HTML', 'CSS', 'Javascript', 'CodeIgniter', 'PHP'],
		img : ''
	},
	{
		name : "Software Developer (Freelance)",
        place : "Bangkok, Thailand",
        time: "2015",
		period : "Jun 2015 - Aug 2015",
		description : "Developed a dynamic application that can run on website and mobile for sovling rubik cube in 2 mode: Solver and Tutor.",
		tools : ['IONIC', 'HTML', 'CSS', 'Javascript'],
		img : ''
	},
	{
		name : "2D Game Graphic Designer (Freelance)",
        place : "Bangkok, Thailand",
        time: "2015",
		period : "Jun 2015 - Aug 2015",
		description : "Designed and drew 2D game graphics for 3 programming education games: Angry Penguin, Save the Corgi and Tank Battle. All are included sprites, elements, background images and logo",
		tools : ['Photoshop'],
		img : ''
	},
	{
		name : "e-Government Laboratory Member and Senior",
        place : "Kookmin University, Seoul, South Korea",
        time: "2015",
		period : "Sept 2015 - Aug 2017",
		description : "Research on Microservice Architecture and full-stack developed a document management system for managing document flow in e-Government based on a module of ONNARA (real Koream e-government system) referring to Microservice Architecture including system requirement gathering, design, development, testing and deployment. Also teaching others laboratory members and interns to participate in the project through pair programming.",
		tools : ['IONIC', 'HTML', 'CSS', 'Javascript', 'Java', 'Spring', 'Python', 'Flask', 'Docker', 'Openstack'],
		img : ''
	},
	{
		name : "Public Relation",
        place : "Association of Thai Student in Korea (ATSK), Seoul, South Korea",
        time: "2016",
		period : "Sept 2016 - Aug 2017",
		description : "Designed invitation posters and publicised news and announcements of activities for Thai students in South Korea on social media",
		tools : [ 'Photoshop', 'Facebook', 'KakaoTalk'],
		img : ''
	}
]