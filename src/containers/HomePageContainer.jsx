import React from 'react';
import LogoComponent from 'components/LogoComponent';
import ContactsLineComponent from '../components/ContactsLineComponent';
import textContent from 'textContentLocalisation'
import { Link } from 'react-router-dom';
import aboutVideo from 'img/homePage/aboutVideo.mp4';
import technologyVideo from 'img/homePage/technologyVideo.mp4';
import clientsVideo from 'img/homePage/clientsVideo.mp4';
import teamVideo from 'img/homePage/teamVideo.mp4';
import newsVideo from 'img/homePage/newsVideo.mp4';

const HomePageContainer = () => {
    return (
        <div className='homePage'>
            <div className='homePageVideoContainer'>
                <div className='homeVideoBlock' >
                    <video
                        className='homeVideo'
                        loop='loop'
                        controls='true'
                        preload='auto'
                        autoPlay='true'
                        width='1783'
                        height='1003'
                        src={aboutVideo}
                        type="video/mp4" />
                </div>
                <div className='homeVideoBlock'>
                    <video
                        className='homeVideo'
                        loop='loop'
                        preload='auto'
                        autoPlay='true'
                        width='1783'
                        height='1003'
                        src={technologyVideo}
                        type="video/mp4" />
                </div>
                <div className='homeVideoBlock'>
                    <video
                        className='homeVideo'
                        loop='loop'
                        preload='auto'
                        autoPlay='true'
                        width='1783'
                        height='1003'
                        src={clientsVideo}
                        type="video/mp4"
                    />
                </div>
                <div
                    className='homeVideoBlock'>
                    <video
                        className='homeVideo'
                        loop='loop'
                        preload='auto'
                        autoPlay='true'
                        width='1783'
                        height='1003'
                        src={teamVideo}
                        type="video/mp4"
                    />
                </div>
                <div
                    className='homeVideoBlock'>
                    <video
                        className='homeVideo'
                        loop='loop'
                        preload='auto'
                        autoPlay='true'
                        width='1783'
                        height='1003'
                        src={newsVideo}
                        type="video/mp4"
                    />
                </div>
            </div>
            <div className='backgroundContainer' />
            <div className='homePageContent'>
                <LogoComponent
                    logoBlockClass='homeLogoBlock'
                    logoImgClass='homeLogoImg'
                    logoNameClass='homeLogoName'
                />
                <nav className='homePageNavigationContainer'>
                    <Link className='homePageNavigationMenuItem' id='aboutBackgroundBlock' to='/about'> {textContent.navigation.about.toUpperCase()} </Link>
                    <Link className='homePageNavigationMenuItem' id='technologyBackgroundBlock' to='/technology'> {textContent.navigation.technology.toUpperCase()} </Link>
                    <Link className='homePageNavigationMenuItem' id='clientsBackgroundBlock' to='/clients'> {textContent.navigation.clients.toUpperCase()} </Link>
                    <Link className='homePageNavigationMenuItem' id='teamBackgroundBlock' to='/team'> {textContent.navigation.team.toUpperCase()} </Link>
                    <Link className='homePageNavigationMenuItem' id='newsBackgroundBlock' to='/news'> {textContent.navigation.news.toUpperCase()} </Link>
                </nav>
            </div>

            <div className='homePageFooter'>
                <ContactsLineComponent />
                <div className='copyright'>{textContent.footer.allRightsReserved}</div>
            </div>
        </div>
    );
};

export default HomePageContainer;
