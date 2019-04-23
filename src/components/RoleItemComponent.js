import React,{ PureComponent } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { stringWithNewLine } from '../util/util';

class RoleItemComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderSkillSet = (skillSet) => {
        return (<ul css={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap', 
            justifyContent: 'left',
            padding: 0
    
        }}>{skillSet.map(item => {
            return (<li 
                css={{ 
                    fontSize: '0.3em', 
                    padding: '0 10px', 
                    lineHeight: '3em',
                    borderRadius: '15px', 
                    background: '#1c5189', 
                    margin: '0 10px 10px 0',
                }}>{item}</li>)
        })}</ul>)
    }

    render() {
        const { index, position, place, period, description, skillSet, openDescription, isOpen } = this.props;
        const getRotateArrowStyle = () => {
            if (!!isOpen) return { transform: 'rotate(90deg)', transition: '0.3s'}
            return {  transform: 'rotate(0deg)', transition: '0.3s' }
        }
        return (
        <div css={{ 
            display: 'flex', 
            padding: '30px 0',
            cursor: 'pointer',
            ['&:not(:last-child)']: {
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }
            }}
            onClick={() => {
                openDescription(index);
            }}>
            <div css={{ width: '90%', textAlign: 'left', padding: '0 30px'}}>
                <div css={{ fontWeight: '900', lineHeight: '1.2em', marginBottom: '10px'}}>{position}</div>
                <div css={{ fontSize: '0.7em', fontStyle: 'oblique', lineHeight: '1.2em'}}>{period}</div>
                <div css={{ fontSize: '0.7em', fontStyle: 'oblique', lineHeight: '1.2em'}}>@{place}</div>
                <div>{this.renderSkillSet(skillSet)}</div>
                {!!isOpen ? <div css={{ fontSize: '0.7em', lineHeight: '1.5em'}}>{stringWithNewLine(description)}</div> : null}
            </div>
            <div css={{ width: '10%', display: 'flex', alignItems: 'start', marginTop: '20px'}}>
                <FontAwesomeIcon css={{ cursor: 'pointer', color: '#266cb9', fontSize: '1.2em', ...getRotateArrowStyle() }} icon={faChevronRight}/> 
            </div>
        </div>)
    }
}

export default RoleItemComponent;