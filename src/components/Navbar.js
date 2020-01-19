import { React } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaMaxWidth } from '../util/util';
import { HashLink as Link } from 'react-router-hash-link';
import ContactComponent from './ContactComponent';

export default () => {

    return (
   
        <div id="navbar" css={{ 
            [mediaMaxWidth(768)]: { fontSize: '1em', padding: '20px' },
            fontSize: '2em', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Link to="/summary">
            <div css={{textTransform: 'uppercase'}}>
                <div>Pankamol</div><div>Srikaew</div>
            </div>
            </Link>
            <ContactComponent />
        </div>);
}