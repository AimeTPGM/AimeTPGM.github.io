import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

export default () => (
    <div class="arrow-info"><FontAwesomeIcon style={{ 'font-size': '1.5em'}} icon={faArrowAltCircleRight}/></div>
)