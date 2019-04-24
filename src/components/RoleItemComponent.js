import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import RoleSubItemComponent from './RoleSubItemComponent';

export default (props) => {
    const renderSkillSet = (skillSet) => {
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
    const { experienceId, place, skillSet, openDescFunc, roles } = props;
        return (
        <div css={{ 
            display: 'flex', 
            padding: '30px 0',
            ['&:not(:last-child)']: {
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }
            }}>
            <div css={{  width:'100%', textAlign: 'left'}}>
                <div css={{ fontSize: '0.7em', fontStyle: 'oblique', lineHeight: '1.2em', padding: '0 40px'}}>{place}</div>
                {roles.map((item, roleId) => {
                    return (<RoleSubItemComponent
                            key={roleId}
                            experienceId={experienceId}
                            roleId={roleId}
                            name={item.name}
                            period={item.period}
                            description={item.description}
                            isOpen={item.isOpen}
                            openDescFunc={openDescFunc}
                         />)
                })}
                <div css={{padding: '0 40px'}}>{renderSkillSet(skillSet)}</div>
            </div>
        </div>)
}