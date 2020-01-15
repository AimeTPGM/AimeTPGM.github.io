import { React } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colorScheme } from '../appConstant';
import { mediaMaxWidth } from '../util/util';

export default (props) => {
    const { letter } = props;
    return (<div css={{
        [mediaMaxWidth(768)]: { fontSize: '30em',marginTop: '-120px', marginLeft: '-160px' },
        position: 'absolute', fontSize: '60em', marginTop: '-240px', marginLeft: '-330px', color: colorScheme.secondaryBgColor, zIndex: 0
        }}>
        {letter}
    </div>)
}