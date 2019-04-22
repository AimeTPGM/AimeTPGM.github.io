import React from 'react';
import { mediaMaxWidth } from '../util/util';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export default (props) => {
    const { renderComponent } = props;
    return (
        <div css={{ 
            fontSize: '1.2em', 
            lineHeight: '2em',
            width: '60vw',
            margin: '10px',
            overflow: 'hidden',
            position: 'relative',
            padding: '10px',
            textAlign: 'center',
            zIndex: '1',
            [mediaMaxWidth(768)]: {
                width: 'fit-content',
                margin: 0,
            }
        }}>
            {renderComponent()}
        </div>
    )
}