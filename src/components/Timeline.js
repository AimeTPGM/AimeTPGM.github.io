import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colorScheme } from '../appConstant';
import { mediaMaxWidth } from '../util/util';
import { timelineData } from '../data';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowCircle from './ArrowCircle';
import { Link } from 'react-router-dom';

export default () => {
    return (<div css={{
            [mediaMaxWidth(768)]: {
                padding: 0
            }, padding: '0 100px'
        }}>
        <ul class={'timeline'} >
        {timelineData.map((item) => {
            return (<li>
                        <div class="year">{item.startYear}</div>
                        <Link to="/experience">
                        {item.experiences.map((exp) => {
                            return (
                            <div>
                                <div class="role-wrapper">
                                    <div class="role">
                                        <div class="name">{exp.name}</div>
                                        <div class="period">{exp.period}</div>
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
