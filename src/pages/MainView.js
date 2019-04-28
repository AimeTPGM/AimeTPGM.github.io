import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ContactComponent from '../components/ContactComponent';
import { mediaMaxWidth } from '../util/util';
import MenuComponent from '../components/MenuComponent';
import { lightBlue, masterHilightColor } from '../appConstant';

const bracketStyle = { fontSize: '1.4em', fontWeight: '200', lineHeight: '0.7em' }
export default () => (
    <div css={{
        alignItems: 'center',
        minHeight: '100vh',
        marginTop: '5vh'
    }}>
        <div><h1 css={{ marginBottom: '50px'}}>
            <a css={{ color: masterHilightColor, fontSize: '2em', textDecoration: 'none', display: 'flex', justifyContent: 'center'}} href={'#'}>
                            <div css={{ ...bracketStyle, marginRight: '10px' }}>{'<'}</div>
                            <div css={{marginRight: '10px'}}>
                                <div css={{ textTransform: 'uppercase', fontWeight: '400' }}>Aime</div>
                                <div css={{ fontSize: '0.3em', fontWeight: '100', lineHeight: '0.5em', letterSpacing: '7.5px'}}>P.Srikaew</div>
                            </div>
                            <div css={{ ...bracketStyle, margin: 0, fontSize: '1.35em', lineHeight: '1em' }}>{'/'}</div>
                            <div css={{ ...bracketStyle }}>{'>'}</div>
                </a></h1></div>
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

