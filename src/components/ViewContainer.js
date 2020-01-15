import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Navbar from './Navbar';
import BackgroundElement from './BackgroundElement';
import MainHeader from './MainHeader';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';

export default (props) => {
    const { bgLetter, bgEleStyle, content, mainHeaderText, footerText, footerNavigate } = props;
    return (<div css={{}}>
            <BackgroundElement letter={bgLetter} eleStyle={bgEleStyle} />
            <div css={{
                alignItems: 'center',
                minHeight: '90vh',
                textAlign: 'left',
                position: 'relative',
                zIndex: 1,
                padding: '20px'
            }}>
            
            <Navbar />

            <div>
                <MainHeader textElement={mainHeaderText} />
                {content}
                
            </div>
            
            </div>
            {footerText ? <Footer text={footerText} navigateTo={footerNavigate} /> : null}
    </div>)
    
}

