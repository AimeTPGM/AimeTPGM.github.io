import React, { useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Navbar from '../components/Navbar';
import BackgroundElement from '../components/BackgroundElement';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

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
            }}>
            
            <Navbar />

            <div css={{ padding: '20px' }}>
                <MainHeader textElement={mainHeaderText} />
                {content}
                
            </div>
            
            </div>
            {footerText ? <Footer text={footerText} navigateTo={footerNavigate} /> : null}
    </div>)
    
}

