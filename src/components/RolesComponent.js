import React, { PureComponent } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { lightBlue, masterColor } from '../appConstant';
import { mediaMaxWidth } from '../util/util';
import RibbonComponent from './RibbonComponent';
import RoleItemComponent from './RoleItemComponent';

class RolesComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = { activeItemIndex: 0, data: timelineData }
        this.openDescription = this.openDescription.bind(this)
        
    }

    render() {
        const { activeItemIndex, data } = this.state;
        const activeItem = data[activeItemIndex];
        return (
        <div css={{ background: 'rgba(0,0,0,0.3)', zIndex: 1 }}>
            <div css={{display: 'flex'}}>
                <div css={{display: 'flex', justifyContent: 'space-around', width: '90%', [mediaMaxWidth(768)] : { width: 'calc(90% - 60px)'}}}>
                    {timelineData.map((item, i) => {
                        let divStyle = { 
                            color: 'white', 
                            cursor: 'pointer',
                            width: '100%',
                            border: '1px solid rgba(0,0,0,0.1)',
                            background: 'rgba(0,0,0,0.2)',
                            ['&:not(:first-child)'] : { 
                                border: '1px solid rgba(255,255,255,0.1), 1px solid rgba(255,255,255,0.1), 1px solid rgba(255,255,255,0.1), 0',
                            },
                            [mediaMaxWidth(768)] : {
                                fontSize: '0.8em'
                            }
                        };
                        if (i == activeItemIndex) {
                            divStyle = { 
                                ...divStyle,
                                borderBottom: 0,
                                color: 'white',
                                background: 'transparent',
                            }
                        }
                        return (
                            <div key={i} css={{...divStyle}}
                            onClick={ () => {
                                this.setState({ activeItemIndex: i })
                            }}>{item.startYear}</div>)
                    })}
                </div>
                <div css={{width: '10%', background: 'rgba(0,0,0,0.2)'}}>
                    <RibbonComponent />
                </div>
            </div>
            {activeItem.experiences.map((item, index) => { 
                return (
                <RoleItemComponent
                    key={index}
                    index={index}
                    isOpen={item.isOpen}
                    openDescription={this.openDescription}
                    position={item.position}
                    period={item.period}
                    place={item.place}
                    description={item.description}
                    skillSet={item.tools}
                />);
            }
            )}
            </div>)
    }

    openDescription(index) {
        let { activeItemIndex, data } = this.state;
        let activeItem = data[activeItemIndex];
        activeItem.experiences[index].isOpen = !activeItem.experiences[index].isOpen;
        data[activeItemIndex] = activeItem;
        this.setState({ ...this.state, data });
        this.forceUpdate();
    }
    
}

export default RolesComponent;

const timelineData = [
    {
        startYear: '2017',
        experiences: [
            {
                position : "Senior FullStack Developer",
                place : "Allianz Technology, Bangkok, Thailand",
                period : "Jan 2019 - Present",
                description : 'Frontend Refactoring Initiatives (React Native Redux Saga)\nRelease 3 Performance Testing Facilitator',
                tools : [ 'Java', 'Spring', 'Kotlin', 'Redis', 'MySQL', 'Liquibase', 'Mockito', 'Jmeter', 'FCM', 'Cloudfoundry', 'Jenkins', 'Docker', 'Angular', 'Jasmine', 'Javascript', 'React Native', 'Redux', 'Saga', 'Jest'],
                img : '',
                isOpen: false
            },
            {
                position : "FullStack Developer",
                place : "Allianz Technology, Bangkok, Thailand",
                period : "Dec 2017 - Dec 2018",
                description : "Hexalite team is conducting Roadside Assistance Application for facilitating user client and customer of Allianz in case of car breakdown. This project is first technical launching in Austria and Germany and continuously on development to serve people all around the world. \n\nMy responsibilities and experiences as a full stack developer are listed as following: \n\n- Web application development using Angular 5 with unit testing using Jasmine and Karma\n- Mobile application development using React Native with Redux-Saga and Jest for unit testing\n- Backend capabilities development based on Microservice Architecture with Service Discovery(Eureka) using Java Spring Framework, Kotlin, Redis and MySQL with unit testing using Mockito\n- Google Firebase Cloud Messaging for forwarding notification from BE Capabilities to Mobile\n- Liquibase script implementation for database versioning\n- Environment migration from silos to Cloudfoundry\n- Jenkins ci-cd script implementation for automation deployment from checkout stage, build with unit test thru deploy artifact with versioning to nexus\n- Integrating CI/CD with notification service to notify the team in Slack for every Jenkins build process and result\n- partially integrating Sonarqube code quality gate on Backend using Jacoco plugin\n- Github Push Webhook with Jenkins automation build pipeline\n- Partially performing performance testing using Jmeter and plugins\n- Production deployment execution\n- Production Issue Investigation and Solution",
                tools : [ 'Java', 'Spring', 'Kotlin', 'Redis', 'MySQL', 'Liquibase', 'Mockito', 'Jmeter', 'FCM', 'Cloudfoundry', 'Jenkins', 'Docker', 'Angular', 'Jasmine', 'Javascript', 'React Native', 'Redux', 'Saga', 'Jest'],
                img : '',
                isOpen: false
            }
        ]
    },
    {
        startYear: '2016',
        experiences: [
            {
                position : "Public Relation",
                place : "Association of Thai Student in Korea (ATSK), Seoul, South Korea",
                period : "Sept 2016 - Aug 2017",
                description : "Designed invitation posters and publicised news and announcements of activities for Thai students in South Korea on social media",
                tools : [ 'Photoshop', 'Facebook', 'KakaoTalk'],
                img : '',
                isOpen: false
            }
        ]
    },
    {
        startYear: '2015',
        experiences: [
            {
                position : "e-Government Laboratory Member and Senior",
                place : "Kookmin University, Seoul, South Korea",
                period : "Sept 2015 - Aug 2017",
                description : "Research on Microservice Architecture and full-stack developed a document management system for managing document flow in e-Government based on a module of ONNARA (real Koream e-government system) referring to Microservice Architecture including system requirement gathering, design, development, testing and deployment. Also teaching others laboratory members and interns to participate in the project through pair programming.",
                tools : ['IONIC', 'HTML', 'CSS', 'Javascript', 'Java', 'Spring', 'Python', 'Flask', 'Docker', 'Openstack'],
                img : '',
                isOpen: false
            },
            {
                position : "Software Developer (Freelance)",
                place : "Bangkok, Thailand",
                period : "Jun 2015 - Aug 2015",
                description : "Developed a dynamic application that can run on website and mobile for sovling rubik cube in 2 mode: Solver and Tutor.",
                tools : ['IONIC', 'HTML', 'CSS', 'Javascript'],
                img : '',
                isOpen: false
            },
            {
                position : "2D Game Graphic Designer (Freelance)",
                place : "Bangkok, Thailand",
                period : "Jun 2015 - Aug 2015",
                description : "Designed and drew 2D game graphics for 3 programming education games: Angry Penguin, Save the Corgi and Tank Battle. All are included sprites, elements, background images and logo",
                tools : ['Photoshop'],
                img : '',
                isOpen: false
            }
        ]
    },
    {
        startYear: '2014',
        experiences: [
            {
                position : "Intern",
                place : "Kookmin University, Seoul, South Korea",
                period : "Sept 2014 - Dec 2014",
                description : "Developed a website called Work Management Tool to manage project tasks from many country (Thailand and Korea are include) for development E-government system together, main responsibility on frontend development, sub-responsibility on backend development",
                tools : ['Bootstrap', 'HTML', 'CSS', 'Javascript', 'CodeIgniter', 'PHP'],
                img : '',
                isOpen: false
            }
        ]
    }
]