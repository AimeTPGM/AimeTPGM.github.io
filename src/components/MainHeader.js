import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { colorScheme } from '../appConstant';

export default (props) => {
    const { textElement } = props;
    return (<div css={{ padding: '20px', marginTop: '50px', fontSize: '1.4em', fontFamily: 'Montserrat_EXTRA_BOLD', color: colorScheme.topicTextColor }}>{textElement}</div>)
}