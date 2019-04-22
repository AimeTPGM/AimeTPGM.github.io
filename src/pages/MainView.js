import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ContactComponent from '../components/ContactComponent';
import { mediaMaxWidth } from '../util/util';
import MenuComponent from '../components/MenuComponent';

export default () => (
    <div css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '10px'
    }}>
        <div css={{ 
                [mediaMaxWidth(768)]: {
                    marginTop: 0
                }
            }}>
            <MenuComponent />
            <p><strong>Hello!</strong> I'm quite busy with so many things around. will keep update the page very very soon.</p>
            <p>You can reach me anywhere online here.</p>
            <ContactComponent />
        </div>
    </div>
)

