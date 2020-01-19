import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaMaxWidth, stringWithNewLine } from '../util/util';
import ViewContainer from './ViewContainer';
import { useParams, Redirect } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { workExp } from '../data';
import { colorScheme } from '../appConstant';
import SkillSetComponent from '../components/SkillSetComponent';

export default () => {
    const bgEleStyle = { fontSize: '50em', marginTop: '-270px', marginLeft: '-150px', [mediaMaxWidth(768)]: { fontSize: '40em', marginTop: '-180px', marginLeft: '-120px', } }
    const getWorkAndExperiencesHeader = () =>  { 
        return (<div><div>{'Work &'}</div><div>{'Experiences'}</div></div>)
    }
    
    const { id } = useParams();

    const renderContent = () => {
        const workData = workExp[id-1];
        return(<div css={{ [mediaMaxWidth(768)]: { padding: '0 10px'}, marginTop: '50px', padding: '0 300px' }}>
            <div css={{ fontSize: '2em', fontFamily: 'Montserrat_EXTRA_BOLD'}}>{workData.name}</div>
            <div css={{ marginTop: '10px', fontFamily: 'Montserrat', color: colorScheme.secondaryTextColor}}>{workData.period} at {workData.place}</div>
            <div css={{ display: 'flex', margin: '50px 0' }}>
            {workExp.map((item, key) => {
                const isActiveStyle = (key+1) === +id ? { background: colorScheme.primaryTextColor } : {};
                return (
                    <Link css={{ flex: 1, background: colorScheme.secondaryTextColor, height: '4px', marginRight: '2px', ...isActiveStyle }} to={`/experience/${key+1}`}></Link>
                )
            })}
            </div>
            <div css={{fontFamily: 'Montserrat'}}>
                {stringWithNewLine(workData.description, {textIndent: 0})}
            </div>
            <div css={{textAlign: 'center', margin: '100px 0 40px 0'}}>Technology Involved</div>
            <div css={{ margin: 'auto', padding: 0}}>
                {workData.tools.map(item => {
                    return (<div css={{ fontFamily: 'Montserrat', marginBottom: '40px'}}>
                        <div css={{marginRight: '20px', marginBottom: '10px' }}>{item.skillName}:</div>
                        <div><SkillSetComponent skillSet={item.itemList} /></div>
                    </div>)
                })}
            </div>
            
        </div>)
    }

    const getContent = () => {
        return id ? renderContent() : <Redirect to='/summary'/>
    }
    return (<div>
        <ViewContainer 
            bgLetter={'>'} 
            bgEleStyle={bgEleStyle} 
            mainHeaderText={getWorkAndExperiencesHeader()} 
            content={getContent()}
            footerText={'Recommendation'}
            footerNavigate={'/recommendation#navbar'}
            />
    </div>)
}
