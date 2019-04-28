import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import RoleSubItemComponent from './RoleSubItemComponent';
import SkillSetComponent from './SkillSetComponent';

export default (props) => {
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
                <div css={{ fontSize: '0.7em', fontStyle: 'oblique', lineHeight: '1.2em', padding: '0 40px', marginBottom: '30px'}}>{place}</div>
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
                            isPresent={item.isPresent}
                         />)
                })}
                <div css={{padding: '0 40px'}}>
                    {skillSet.map((item, key) => {
                        return (<div key={key} css={{ display: 'flex', alignItems: 'baseline', ['&:first-child']: { marginTop: '20px'}}}>
                            <div css={{ fontSize: '0.4em', lineHeight: '1.4em', width: '20%', textAlign: 'right', marginRight: '15px'}}>{item.skillName}:</div>
                            <SkillSetComponent skillSet={item.itemList} />
                        </div>)
                    })
                    }
                </div>
            </div>
        </div>)
}