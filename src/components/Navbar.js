import { React } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { mediaMaxWidth } from '../util/util';
import { Link } from 'react-router-dom';
import ContactComponent from './ContactComponent';

export default () => {

    return (
   
        <div css={{ 
            [mediaMaxWidth(768)]: { fontSize: '1em' },
            fontSize: '2em', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Link to="/summary">
            <div css={{textTransform: 'uppercase'}}>
                <div>Pankamol</div><div>Srikaew</div>
            </div>
            </Link>
            <ContactComponent />
        </div>);
}