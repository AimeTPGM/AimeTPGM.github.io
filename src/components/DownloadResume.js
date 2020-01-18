import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colorScheme } from '../appConstant';
import resume from '../assets/pankamol-srikaew-resume-2020.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

export default () => {
    return (
        <div css={{ cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center', background: colorScheme.topicTextColor, color: '#fff'}}
        onClick={() => { window.open(resume) }}>
            <div css={{ padding: '20px', display: 'flex'}}>
            <div css={{marginRight: '10px', color: '#fff', fontFamily: 'Montserrat'}}>
                Download Resume
                </div>
                <FontAwesomeIcon icon={faFilePdf} />
            </div>
            
        </div>
        )
}