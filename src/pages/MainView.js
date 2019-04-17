import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ContactComponent from '../components/ContactComponent';
import { lightBlue } from '../appConstant';


export default () => (
    <div css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        <div css={{ marginTop: '-15vh' }}>
            <div css={{ fontSize: '3em', textAlign: 'left' }}>
                <h1 css={{ color: lightBlue, fontSize: '1.2em', margin: '0 0 20px 0'}}>Aime – P.Srikaew</h1>
            </div>
            <div css={{ 
                padding: '40px', 
                background: 'rgba(0,0,0,0.5)', 
                border: '2px solid #6e9db7',
                fontSize: '1.2em', 
                lineHeight: '2em',
                width: '60vw',
                margin: '10px 0 0',
                textAlign: 'center'
            }}>
                <p><strong>Hello!</strong> I'm quite busy with so many things around. will keep update the page very very soon.</p>
                <p>You can reach me anywhere online here.</p>
                <ContactComponent />
            </div>
        </div>
    </div>
)

