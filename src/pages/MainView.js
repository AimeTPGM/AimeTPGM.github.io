import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ContactComponent from '../components/ContactComponent';
import { mediaMaxWidth } from '../util/util';
import MenuComponent from '../components/MenuComponent';

export default () => (
    <div css={{
        alignItems: 'center',
        minHeight: '100vh',
        padding: '10px',
        marginTop: '10vh'
    }}>
        <div css={{ 
                [mediaMaxWidth(768)]: {
                    marginTop: 0
                }
            }}>
            <MenuComponent />
            <ContactComponent />
        </div>
    </div>
)

