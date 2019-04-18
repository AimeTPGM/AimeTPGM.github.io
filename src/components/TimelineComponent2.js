import React, { PureComponent } from 'react';
import './TimelineStyle.css'
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { lightBlue, masterColor } from '../appConstant';


class TimeLine extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { activeItemIndex: timelineData.length-1 }
        
    }

    render() {
        const { activeItemIndex } = this.state;
        const activeItem = timelineData[activeItemIndex];
        return (<div>
            <div css={{overflow: 'scroll', display: 'flex', justifyContent: 'center'}}>
                {timelineData.map((item, i) => {
                    let divStyle = { color: 'white', 
                        padding: '15px', 
                        borderRadius: '50%',  
                        marginRight: '10px'
                    };
                    console.log(`i = ${i}, active=${activeItemIndex}`)
                    if (i == activeItemIndex) {

                        divStyle = { 
                            ...divStyle,
                            background: lightBlue, 
                            color: masterColor
                        }
                    }
                    return (<div>
                        <div css={{...divStyle}}>{item.time}</div>
                    </div>)
                })}
            </div>
            <div>
                {/* <div>
                    {activeItem.Name}@{activeItem.place}
                </div> */}
                <div>
                    {activeItem.Description}
                </div>
            </div>
        </div>)
    }
    
}

export default TimeLine;

const timelineData = [
	{
		Name : "Intern",
        place : "Kookmin University, Seoul, South Korea",
        time: "2014",
		// "Time" : "Sept 2014 - Dec 2014",
		"Description" : "Developed a website called Work Management Tool to manage project tasks from many country (Thailand and Korea are include) for development E-government system together, main responsibility on frontend development, sub-responsibility on backend development",
		"Tools" : "Bootstrap(HTML, CSS, JS) and CodeIgniter(PHP)",
		"Img" : ""
	},
	{
		Name : "Software Developer (Freelance)",
        place : "Bangkok, Thailand",
        time: "2015",
		// "Time" : "Jun 2015 - Aug 2015",
		"Description" : "Developed a dynamic application that can run on website and mobile for sovling rubik cube in 2 mode: Solver and Tutor.",
		"Tools" : "IONIC(HTML, CSS, JS)",
		"Img" : ""
	},
	{
		Name : "2D Game Graphic Designer (Freelance)",
        place : "Bangkok, Thailand",
        time: "2015",
		// "Time" : "Jun 2015 - Aug 2015",
		"Description" : "Designed and drew 2D game graphics for 3 programming education games: Angry Penguin, Save the Corgi and Tank Battle. All are included sprites, elements, background images and logo",
		"Tools" : "Photoshop",
		"Img" : ""
	},
	{
		Name : "e-Government Laboratory Member and Senior",
        place : "Kookmin University, Seoul, South Korea",
        time: "2015",
		// "Time" : "Sept 2015 - Aug 2017",
		"Description" : "Research on Microservice Architecture and full-stack developed a document management system for managing document flow in e-Government based on a module of ONNARA (real Koream e-government system) referring to Microservice Architecture including system requirement gathering, design, development, testing and deployment. Also teaching others laboratory members and interns to participate in the project through pair programming.",
		"Tools" : "IONIC(HTML, CSS, JS), Java(Spring JAX-RS), Python(Flask), Docker and Openstack(Private Cloud)",
		"Img" : ""
	},
	{
		Name : "Public Relation",
        place : "Association of Thai Student in Korea (ATSK), Seoul, South Korea",
        time: "2016",
		// "Time" : "Sept 2016 - Aug 2017",
		"Description" : "Designed invitation posters and publicised news and announcements of activities for Thai students in South Korea on social media",
		"Tools" : "Photoshop, Facebook and KakaoTalk",
		"Img" : ""
	}
	]