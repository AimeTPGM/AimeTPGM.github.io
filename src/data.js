import { faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFilePdf } from "@fortawesome/free-regular-svg-icons"
import resume from './assets/pankamol-srikaew-resume-2020.pdf'

export const workExp = [
    {
        place: 'Allianz Technology, Bangkok, Thailand',
        name: 'Senior FullStack Developer',
        period: 'Jan 2019 - Present',
        description: 'Frontend Refactoring Initiatives (React Native Redux Saga)\nRelease 3 Performance Testing (Jmeter)\nProduction on-call support\nRelease 4 App Submission to iOS App Store\nUX design proposal and UI Mockup for visualization\nworked with PO, BA and Team Lead in sprint planning and scrum of scrum planning\nInitialized ticket-go-thru session in the team for increasing the awareness and team\'s participation in planning\nLead scrum team in technical refinement session, sprint review and retrospectives.\nSupporting and ramping up new joiners in the team',
        tools: [ 
            {
                skillName: 'Backend',
                itemList: ['Java', 'Spring', 'Kotlin', 'Redis', 'MySQL', 'Liquibase', 'Mockito', 'Firebase Cloud Messaging']
            },
            {
                skillName: 'Frontend',
                itemList: ['Javascript ES6', 'HTML', 'SASS', 'Angular5', 'Jasmine',  'React Native', 'Redux', 'Saga', 'Jest']
            },
            {
                skillName: 'Build and Delivery',
                itemList: ['Cloudfoundry', 'Jenkins', 'Docker', 'Maven']
            },
            {
                skillName: 'Others',
                itemList: ['Jmeter']
            }
        ]
    },
    {
        place: 'Allianz Technology, Bangkok, Thailand',
        name: 'FullStack Developer',
        period: 'Dec 2017 - Dec 2018',
        description: 'Hexalite team is conducting Roadside Assistance Application for facilitating user client and customer of Allianz in case of car breakdown. This project is first technical launching in Austria and Germany and continuously on development to serve people all around the world. \n\nMy responsibilities and experiences as a full stack developer are listed as following: \n\n- Web application development using Angular 5 with unit testing using Jasmine and Karma\n- Mobile application development using React Native with Redux-Saga and Jest for unit testing\n- Backend capabilities development based on Microservice Architecture with Service Discovery(Eureka) using Java Spring Framework, Kotlin, Redis and MySQL with unit testing using Mockito\n- Google Firebase Cloud Messaging for forwarding notification from BE Capabilities to Mobile\n- Liquibase script implementation for database versioning\n- Environment migration from silos to Cloudfoundry\n- Jenkins ci-cd script implementation for automation deployment from checkout stage, build with unit test thru deploy artifact with versioning to nexus\n- Integrating CI/CD with notification service to notify the team in Slack for every Jenkins build process and result\n- partially integrating Sonarqube code quality gate on Backend using Jacoco plugin\n- Github Push Webhook with Jenkins automation build pipeline\n- Partially performing performance testing using Jmeter and plugins\n- Production deployment execution\n- Production Issue Investigation and Solution',
        tools: [ 
            {
                skillName: 'Backend',
                itemList: ['Java', 'Spring', 'Kotlin', 'Redis', 'MySQL', 'Liquibase', 'Mockito', 'Firebase Cloud Messaging']
            },
            {
                skillName: 'Frontend',
                itemList: ['Javascript ES6', 'HTML', 'SASS', 'Angular5', 'Jasmine',  'React Native', 'Redux', 'Saga', 'Jest']
            },
            {
                skillName: 'Build and Delivery',
                itemList: ['Cloudfoundry', 'Jenkins', 'Docker', 'Maven']
            },
            {
                skillName: 'Others',
                itemList: ['Jmeter']
            }
        ]
    },
    {
        place: 'Kookmin University, Seoul, South Korea',
        name: 'Senior e-Government Laboratory Member',
        period: 'Sept 2016 - Aug 2017',
        description : 'Teaching others laboratory members and interns to participate in the project through pair programming.',
        tools : [
            {
                skillName: 'Backend',
                itemList: ['Java', 'Spring', 'Python', 'Flask']
            },
            {
                skillName: 'Frontend',
                itemList: ['IONIC', 'HTML', 'CSS', 'Javascript', 'JADE']
            },
            {
                skillName: 'Build and Delivery',
                itemList: ['Docker', 'Openstack']
            },
        ],
    },
    {
        place: 'Kookmin University, Seoul, South Korea',
        name: 'e-Government Laboratory Member',
        period: 'Sept 2015 - Aug 2016',
        description : 'Research on Microservice Architecture and full-stack developed a document management system for managing document flow in e-Government based on a module of ONNARA referring to Microservice Architecture including system requirement gathering, design, development, testing and deployment.',
        tools : [
            {
                skillName: 'Backend',
                itemList: ['Java', 'Spring', 'Python', 'Flask']
            },
            {
                skillName: 'Frontend',
                itemList: ['IONIC', 'HTML', 'CSS', 'Javascript', 'JADE']
            },
            {
                skillName: 'Build and Delivery',
                itemList: ['Docker', 'Openstack']
            },
        ],
    },
    {
        place : 'Freelance, Bangkok, Thailand',
        name: 'Software Developer',
        period: 'Jun 2015 - Aug 2015',
        description : 'Developed a dynamic application that can run on website and mobile for sovling rubik cube in 2 mode: Solver and Tutor.',
        tools : [
            {
                skillName: 'Frontend',
                itemList: ['IONIC', 'HTML', 'CSS', 'Javascript']
            },
            {
                skillName: 'Others',
                itemList: ['Photoshop']
            }
        ],
    },
    {
        place : 'Freelance, Bangkok, Thailand',
        name: '2D Game Graphic Designer',
        period: 'Jun 2015 - Aug 2015',
        description : 'Designed and drew 2D game graphics for 3 programming education games: Angry Penguin, Save the Corgi and Tank Battle. All are included sprites, elements, background images and logo.',
        tools : [
            {
                skillName: 'Others',
                itemList: ['Photoshop']
            }
        ],
    },
    {
        place: 'Kookmin University, Seoul, South Korea',
        name: 'Intern',
        period: 'Sept 2014 - Dec 2014',
        description : 'Developed a website called Work Management Tool for E-government system, main responsibility on frontend development, sub-responsibility on backend development.',
        tools : [
            {
                skillName: 'Backend',
                itemList: ['PHP', 'CodeIgniter']
            },
            {
                skillName: 'Frontend',
                itemList: ['Bootstrap', 'HTML', 'CSS', 'Javascript']
            }
        ],
    },
]

export const timelineData = [
    {
        startYear: '2020',
        experiences: [
            {
                id: 1,
                place: 'Allianz Technology, Bangkok, Thailand',
                name: 'Senior FullStack Developer',
                period: 'Jan 2019 - Present',
            }
        ]
    }, 
    {
        startYear: '2017',
        experiences: [
            {
                id: 2,
                place: 'Allianz Technology, Bangkok, Thailand',
                name: 'FullStack Developer',
                period: 'Dec 2017 - Dec 2018',
            },

        ]
    },
    {
        startYear: '2016',
        experiences: [ 
            {
                id: 3,
                place: 'Kookmin University, Seoul, South Korea',
                name: 'Senior e-Government Laboratory Member',
                period: 'Sept 2016 - Aug 2017',
            }
        ]
    },
    {
        startYear: '2015',
        experiences: [ 
            {
                place: 'Kookmin University, Seoul, South Korea',
                name: 'e-Government Laboratory Member',
                period: 'Sept 2015 - Aug 2016',
                description : 'Research on Microservice Architecture and full-stack developed a document management system for managing document flow in e-Government based on a module of ONNARA referring to Microservice Architecture including system requirement gathering, design, development, testing and deployment.',
                tools : [
                    {
                        skillName: 'Backend Technologies',
                        itemList: ['Java', 'Spring', 'Python', 'Flask']
                    },
                    {
                        skillName: 'Frontend Technologies',
                        itemList: ['IONIC', 'HTML', 'CSS', 'Javascript', 'JADE']
                    },
                    {
                        skillName: 'Build and Delivery',
                        itemList: ['Docker', 'Openstack']
                    },
                ],
            }
        ]
    },
    {
        startYear: '2015',
        experiences: [ 
            {
                id: 4,
                place: 'Kookmin University, Seoul, South Korea',
                name: 'e-Government Laboratory Member',
                period: 'Sept 2015 - Aug 2016',
            },
            {
                id: 5,
                place : 'Freelance, Bangkok, Thailand',
                name: 'Software Developer',
                period: 'Jun 2015 - Aug 2015',
            },
            {
                id: 6,
                place : 'Freelance, Bangkok, Thailand',
                name: '2D Game Graphic Designer',
                period: 'Jun 2015 - Aug 2015',
            }
        ]
    },
    {
        startYear: '2014',
        experiences: [ 
            {
                id: 7,
                place: 'Kookmin University, Seoul, South Korea',
                name: 'Intern',
                period: 'Sept 2014 - Dec 2014',
            },

        ]
    }
]

export const contact = [
    { icon: faLinkedin, link: 'https://www.linkedin.com/in/aimetpgm/' },
    { icon: faGithub, link: 'https://github.com/AimeTPGM' },
    { icon: faFacebook, link: 'https://www.facebook.com/aimetpgm' },
    { icon: faEnvelope, link: 'mailto:sr.pankamol@gmail.com?Subject=Hey!%20I%20found%20you%20from%20github%20page.'},
    { icon: faFilePdf, link: () => window.open(resume) }
]