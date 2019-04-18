import React from 'react';
import './TimelineStyle.css'
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const timelineData = [
    {
        year: "2011",
        position: "aaa",
        place: "5555",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ex, lobortis quis metus ac, finibus venenatis sem. Morbi tempor mollis placerat. Vestibulum id turpis ac ligula varius luctus at a sapien. Sed varius sit amet urna vel dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec quis mollis nulla."
    },
    {
        year: "2012",
        position: "aaa",
        place: "5555",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ex, lobortis quis metus ac, finibus venenatis sem. Morbi tempor mollis placerat. Vestibulum id turpis ac ligula varius luctus at a sapien. Sed varius sit amet urna vel dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec quis mollis nulla."
    },
    {
        year: "2013",
        position: "aaa",
        place: "5555",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ex, lobortis quis metus ac, finibus venenatis sem. Morbi tempor mollis placerat. Vestibulum id turpis ac ligula varius luctus at a sapien. Sed varius sit amet urna vel dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec quis mollis nulla."
    },
    {
        year: "2014",
        position: "aaa",
        place: "5555",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ex, lobortis quis metus ac, finibus venenatis sem. Morbi tempor mollis placerat. Vestibulum id turpis ac ligula varius luctus at a sapien. Sed varius sit amet urna vel dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec quis mollis nulla."
    },
    {
        year: "2014",
        position: "aaa",
        place: "5555",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ex, lobortis quis metus ac, finibus venenatis sem. Morbi tempor mollis placerat. Vestibulum id turpis ac ligula varius luctus at a sapien. Sed varius sit amet urna vel dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec quis mollis nulla."
    },
    {
        year: "2014",
        position: "aaa",
        place: "5555",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla ex, lobortis quis metus ac, finibus venenatis sem. Morbi tempor mollis placerat. Vestibulum id turpis ac ligula varius luctus at a sapien. Sed varius sit amet urna vel dapibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec quis mollis nulla."
    }
]

export default () => {
    return (<div css={{overflow: 'scroll'}}>
        <ul className="timeline" css={{ 
                listStyle: 'none', 
                display: 'flex',
            }}>
            {timelineData.map(item => {
                return (
                <div>
                    <div css={{textAlign: 'left'}}>
                        <h1>{item.year}</h1>
                    </div>
                    <li css={{ padding: '0 20px 0 0'}}>
                        <div css={{ 
                                paddingTop: '20px' ,
                                minWidth: '40vw',
                                textAlign: 'left',
                            }}>
                            <div>{item.position}</div>
                            <div>{item.place}</div>
                            <div>{item.description}</div>
                        </div>
                    </li>
                </div>)
            })}
        </ul>
    </div>)
}