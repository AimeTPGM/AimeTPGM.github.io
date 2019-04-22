import React,{ PureComponent } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

class RoleItemComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { isOpenDescription: false };
    }

    stringWithNewLine(str) {
        const strs = str.split('\n')
        return strs.map(item => {
            return (
                <span>{item}<br /></span>); 
            })
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
        const { position, place, period, description, skillSet } = this.props;
        const getRotateArrowStyle = () => {
            if (!!this.state.isOpenDescription) return { transform: 'rotate(90deg)', transition: '0.3s'}
            return {  transform: 'rotate(0deg)', transition: '0.3s' }
        }
        return (
        <div css={{ 
            display: 'flex', 
            padding: '30px 0',
            ['&:not(:last-child)']: {
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }
            }}>
            <div css={{ width: '20%' }}>logo</div>
            <div css={{ width: '70%', textAlign: 'left'}}>
                <div css={{ fontWeight: '900'}}>{position}</div>
                <div css={{ fontSize: '0.7em', fontStyle: 'oblique', lineHeight: '1.2em'}}>{period}</div>
                <div css={{ fontSize: '0.7em', fontStyle: 'oblique', lineHeight: '1.2em'}}>@{place}</div>
                <div>{this.renderSkillSet(skillSet)}</div>
                {!!this.state.isOpenDescription ? <div css={{ fontSize: '0.7em', lineHeight: '1.5em'}}>{this.stringWithNewLine(description)}</div> : null}
            </div>
            <div css={{ width: '10%', display: 'flex', alignItems: 'start', marginTop: '20px'}}
                onClick={() => {
                    this.setState({ isOpenDescription: !this.state.isOpenDescription })
                }}>
                <FontAwesomeIcon css={{ cursor: 'pointer', color: '#266cb9', fontSize: '1.2em', ...getRotateArrowStyle() }} icon={faChevronRight}/> 
            </div>
        </div>)
    }
}

export default RoleItemComponent;