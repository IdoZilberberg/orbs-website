import React from 'react';
import LogoComponent from '../components/LogoComponent';
import textContent from 'textContentLocalisation';
import { Link } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import cityVideo from '../img/main/cityVideo.mp4'


const LandingPageContainer = () => {
    return (
        <div className='landingPage'>
            <video
                className='video'
                loop='loop'
                preload='auto'
                autoPlay='true'
                width='1905'
                height='1072'
            >
                <source src={cityVideo} type="video/mp4" />
            </video>
            <div className='backgroundContainer' />
            <div style={{ position: 'relative' }}>
                <LogoComponent
                    logoBlockClass='landingLogoBlock'
                    logoImgClass='landingLogoImg'
                    logoNameClass='landingLogoName'
                />
                <h1 className='landingHeader'>{textContent.landing.header}</h1>
                <p className='landingSubtitle' >
                    {textContent.landing.orbsIsAPublic}
                    <br />
                    {textContent.landing.fromSLA}
                </p>
                <Link to='/home' className='landingButton'>
                    {textContent.landing.button}
                </Link>
                <FooterComponent />
            </div>
        </div >
    );
};

export default LandingPageContainer;