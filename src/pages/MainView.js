import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import ContactComponent from '../components/ContactComponent';
import { mediaMaxWidth } from '../util/util';
import MenuComponent from '../components/MenuComponent';
import { lightBlue } from '../appConstant';

export default () => (
    <div css={{
        alignItems: 'center',
        minHeight: '100vh',
        padding: '10px',
        marginTop: '10vh'
    }}>
        <div><h1><a css={{ color: lightBlue, fontSize: '2em', textDecoration: 'none', ['&:hover'] : {
                            color: 'white'
                        }}} href={'#'}>Aime P.Srikaew</a></h1></div>
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

