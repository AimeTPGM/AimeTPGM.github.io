import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ContactComponent from '../components/ContactComponent';
import { mediaMaxWidth } from '../util/util';
import MenuComponent from '../components/MenuComponent';
import { lightBlue, masterHilightColor } from '../appConstant';

export default () => (
    <div css={{
        alignItems: 'center',
        minHeight: '100vh',
        marginTop: '5vh'
    }}>
        <div><h1 css={{ marginBottom: '40px'}}><a css={{ color: lightBlue, fontSize: '2em', textDecoration: 'none',
                        ['&:hover'] : {
                            color: 'white', ['&:hover']: { color: masterHilightColor }
                        }}} href={'#'}>
                            <div css={{ textTransform: 'uppercase' }}>Aime</div>
                            <div css={{ fontSize: '0.3em'}}>P.Srikaew</div>
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

