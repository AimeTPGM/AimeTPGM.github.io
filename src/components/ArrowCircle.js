import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

export default () => (
    <div className="arrow-info"><FontAwesomeIcon style={{ fontSize: '1.5em'}} icon={faArrowAltCircleRight}/></div>
)