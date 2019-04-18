import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ContactComponent from '../components/ContactComponent';
import { lightBlue } from '../appConstant';
import TimelineComponent from '../components/TimelineComponent';
import TimelineComponent2 from '../components/TimelineComponent2';

const mediaMaxWidth = (width) => { return `@media (max-width: ${width}px)` }

export default () => (
    <div css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '10px'
    }}>
        <div css={{ 
                marginTop: '-15vh',
                [mediaMaxWidth(768)]: {
                    marginTop: 0
                }
            }}>
            <div css={{ fontSize: '3em', textAlign: 'left' }}>
                <h1 css={{ 
                        color: lightBlue, fontSize: '1.2em', margin: '0 0 20px 0',
                        [mediaMaxWidth(768)]: {
                            fontSize: '1em'
                        }
                    }}>Aime – P.Srikaew</h1>
            </div>
            <div css={{ 
                padding: '40px', 
                background: 'rgba(0,0,0,0.5)', 
                border: '2px solid #6e9db7',
                fontSize: '1.2em', 
                lineHeight: '2em',
                width: '60vw',
                margin: '10px 0 0',
                textAlign: 'center',
                [mediaMaxWidth(768)]: {
                    width: 'fit-content',
                    margin: 0,
                }
            }}>
                {/* <p><strong>Hello!</strong> I'm quite busy with so many things around. will keep update the page very very soon.</p>
                <p>You can reach me anywhere online here.</p> */}
                {/* <TimelineComponent /> */}
                <TimelineComponent2 />
            </div>
            <ContactComponent />
        </div>
    </div>
)

