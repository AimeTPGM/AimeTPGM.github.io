import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaMaxWidth } from '../util/util';
import { timelineData } from '../data';
import ArrowCircle from './ArrowCircle';
import { HashLink as Link } from 'react-router-hash-link';

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
                        
                        {item.experiences.map((exp, key) => {
                            return (
                            <Link to={`/experience/${exp.id}#navbar`}>
                                <div  key={`exp-data-${key}`}>
                                    <div className="role-wrapper">
                                        <div className="role">
                                            <div className="name">{exp.name}</div>
                                            <div className="place">{exp.place}</div>
                                            <div className="period">{exp.period}</div>
                                        </div>
                                        <ArrowCircle />
                                    </div>
                                </div>
                            </Link>)
                        })}
                        
                        
                    </li>
                    
            )
        })}
        </ul>
    </div>)
}
