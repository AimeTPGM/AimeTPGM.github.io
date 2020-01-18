import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { stringWithNewLine, mediaMaxWidth } from '../util/util';
import DownloadResume from '../components/DownloadResume';
import ViewContainer from './ViewContainer';

export default () => {
    const bgEleStyle = { fontSize: '50em', marginTop: '-270px', marginLeft: '-150px', [mediaMaxWidth(768)]: { fontSize: '40em', marginTop: '-180px', marginLeft: '-120px', } }
    const getContent = () => {
        return (<div>content</div>)
    }
    return (<div>
        <ViewContainer
            bgLetter={';'} 
            bgEleStyle={bgEleStyle} 
            mainHeaderText={'About Me'} 
            content={getContent()}
            />
            <DownloadResume />
    </div>)
}
