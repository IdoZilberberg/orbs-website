import React from 'react';
import textContent from 'textContentLocalisation';
import vision1 from 'img/visionPage/vision1.png';
import vision2 from 'img/visionPage/vision2.png';
import vision3 from 'img/visionPage/vision3.png';
import vision4 from 'img/visionPage/vision4.png';
import vision5 from 'img/visionPage/vision5.png';
import vision6 from 'img/visionPage/vision6.png';
import vision7 from 'img/visionPage/vision7.png';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const VisionComponent = () => {
    return (
        <div className='contentPage'>
            <h1
                className='visionPageTitle'
            >
                {textContent.visionPage.vision}
            </h1>
            <p
                className='pagesParagraph'
            >
                {textContent.visionPage.weWantTo}
                <br />
                {textContent.visionPage.moreStable}
            </p>
            <ScrollAnimation
                style={{ width: '91.5' }}
                animateIn='fadeInAnimationContainer'
                animateOnce
            >
                <img
                    style={{ width: '100%' }}
                    className='fadeInImages'
                    src={vision1}
                    alt='Vision'
                />
            </ScrollAnimation>
            <p
                style={{
                    letterSpacing: 'normal',
                    color: 'white'
                }}
                className='pagesParagraph'
            >
                {textContent.visionPage.by2020}
                <br />
                {textContent.visionPage.servicesTo}
                <br /><br />
                {textContent.visionPage.theChallengeIs}
                <br /><br />
                {textContent.visionPage.untillNow}
                <br />
                {textContent.visionPage.thatDoesntScale}
            </p>
            <h2
                className='pagesSubtitle'
            >
                {textContent.visionPage.aBlockchain}
                <br />
                {textContent.visionPage.RealWorldBuisness}
            </h2>
            <p
                style={{
                    letterSpacing: 'normal',
                    color: 'white'
                }}
                className='pagesParagraph'
            >
                {textContent.visionPage.ourGoal}
                <br />
                {textContent.visionPage.byProviding}
                <br /><br />
                {textContent.visionPage.weStartedBy}
                <br />
                {textContent.visionPage.understandTheirNeeds}
                <br />
                {textContent.visionPage.didWeStartTo}
                <br />
                {textContent.visionPage.togetherWith}
            </p>
            <ScrollAnimation
                style=
                {{
                    width: '28.5%',
                    margin: '7% auto'
                }}
                animateIn='fadeInAnimationContainer'
                animateOnce
            >
                <img
                    style={{ width: '100%' }}
                    src={vision2}
                    alt='Vision'
                />
            </ScrollAnimation>
            <div>
                <hr
                    color='#546095'
                    width='300em'
                    size='1'
                />
                <h3 className='visionPageSubtitle'>
                    {textContent.visionPage.ourVisionIs}
                    <br />
                    {textContent.visionPage.intoEcosystems}
                </h3>
                < hr
                    color='#546095'
                    width='300em'
                    size='1'
                />
            </div>
            <div className='visionPageImagesContainer'>
                <div style={{
                    position: 'absolute',
                    width: '17.14%',
                    left: '51.02%'
                }}
                >
                    <img
                        style={{ width: '100%' }}
                        src={vision3}
                        alt='Vision'
                    />
                </div>
                <ScrollAnimation
                    animateIn='visionPageRightBlockAnimationContainer'
                    animateOnce
                    duration={3}
                    style={{
                        position: 'absolute',
                        width: '18.46%',
                        left: '51.22%',
                        paddingTop: '13.26%'
                    }}
                >
                    <img
                        style={{ width: '100%' }}
                        src={vision4}
                        alt='Vision'
                    />
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='visionPageLeftBlockAnimationContainer'
                    animateOnce
                    duration={3}
                    style={{
                        position: 'absolute',
                        left: '32.85%',
                        paddingTop: '13.77%',
                        width: '11.63%',
                    }}
                >
                    <img
                        style={{ width: '100%' }}
                        src={vision5}
                        alt='Vision'
                    />
                </ScrollAnimation>
                <div
                    style={{
                        position: 'absolute',
                        width: '11.12%',
                        left: '43.36%',
                        paddingTop: '8.46%'
                    }}
                >
                    <img
                        style={{ width: '100%' }}
                        src={vision6}
                        alt='Vision'
                    />
                </div>
                <div
                    style={{
                        position: 'absolute',
                        width: '12.65%',
                        left: '41.83%',
                        paddingTop: '19.38%'
                    }}
                >
                    <img
                        style={{ width: '100%' }}
                        src={vision7}
                        alt='Vision'
                    />
                </div>
            </div>
            <Link to='technology'>
                <button
                    className='linkButton'
                >
                    {textContent.visionPage.ourTechnology}
                </button>
            </Link>
        </div>
    );
}

export default VisionComponent;
