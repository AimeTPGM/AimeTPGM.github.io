import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaMaxWidth } from '../util/util';
import { timelineData } from '../data';
import ArrowCircle from './ArrowCircle';
import { Link } from 'react-router-dom';

export default () => {
    return (<div css={{
            [mediaMaxWidth(768)]: {
                padding: 0
            }, padding: '0 100px'
        }}>
        <ul className={'timeline'} >
        {timelineData.map((item, key) => {
            return (<li key={`timeline-data-${key}`}>
                        <div className="year">{item.startYear}</div>
                        <Link to={`/experience/${item.id+1}`}>
                        {item.experiences.map((exp, key) => {
                            return (
                            <div  key={`exp-data-${key}`}>
                                <div className="role-wrapper">
                                    <div className="role">
                                        <div className="name">{exp.name}</div>
                                        <div className="period">{exp.period}</div>
                                    </div>
                                    <ArrowCircle />
                                </div>
                            </div>)
                        })}
                        </Link>
                        
                    </li>
                    
            )
        })}
        </ul>
    </div>)
}
