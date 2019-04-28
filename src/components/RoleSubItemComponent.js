import React, { StatelessComponent } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { stringWithNewLine } from '../util/util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { masterHilightColor } from '../appConstant';

export default (props) => {
    const { experienceId, roleId, name, period, description, isOpen, openDescFunc, isPresent } = props;
    const getRotateArrowStyle = () => {
        if (!!isOpen) return { transform: 'rotate(90deg)', transition: '0.3s'}
        return {  transform: 'rotate(0deg)', transition: '0.3s' }
    }

    const getPresentStyle = (isPresent) => {
        if (!isPresent) return { background:'rgba(0,0,0,0.2)' }
        return { background:'#1c518a', color: masterHilightColor }
    }
    
    return (
    <div 
        onClick={() => {
            openDescFunc(experienceId, roleId);
    }}>
        <div css={{ width: '100%', alignItems: 'center', display: 'flex', cursor: 'pointer', ...getPresentStyle(isPresent) }}>
            <div css={{ width:'100%', padding: '20px 40px'}}>
                <div css={{ fontWeight: '900', lineHeight: '1.2em', color: '#8ec1f7'}}>{name}</div>
                <div css={{ fontSize: '0.7em', fontStyle: 'oblique', lineHeight: '1.2em'}}>{period}</div>
            </div>
            <div css={{ width: '10%', display: 'flex', alignItems: 'start'}}>
                <FontAwesomeIcon css={{ cursor: 'pointer', color: '#8ec1f7', fontSize: '1.2em', ...getRotateArrowStyle() }} icon={faChevronRight}/> 
            </div>
        </div>
        {!!isOpen ? <div css={{ width: '90%', fontSize: '0.7em', lineHeight: '1.5em', padding: '0 40px 20px 40px'}}>{stringWithNewLine(description)}</div> : null}
    </div>
    
    )
}