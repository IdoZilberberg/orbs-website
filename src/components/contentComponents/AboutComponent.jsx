import React from 'react';
import hexaImg from 'img/aboutPage/hexaIcon.png'
import { Link } from 'react-router-dom';
import textContent from 'textContentLocalisation';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutComponent = () => {
    return (
        <div className='contentPage'>
            <h1
                className='aboutPageTitle'
            >
                {textContent.aboutPage.about}
            </h1>
            <ScrollAnimation
                animateIn='fadeInAnimationContainer'
                animateOnce
            >
                <h3
                    className='aboutPageSubtitle'
                >
                    {textContent.aboutPage.atOrbs}
                </h3>
                <p
                    style={{ maxWidth: '760px' }}
                    className='pagesParagraph'
                >
                    {textContent.aboutPage.weWantTo}
                    <br /><br />
                    {textContent.aboutPage.wereBuilding}
                    <br /><br />
                    {textContent.aboutPage.weveIncorporated}
                </p>
            </ScrollAnimation>
            <h2
                className='pagesSubtitle'
            >
                {textContent.aboutPage.theOrbsEco}
            </h2>
            <ScrollAnimation
                animateIn='fadeInAnimationContainer'
                animateOnce
            >
                <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://www.hexa-labs.com/'
                >
                    <img
                        className='fadeInImages'
                        src={hexaImg}
                        alt='Hexs labs'
                    />
                </a>
            </ScrollAnimation>
            <p
                className='aboutPageLastParagraph'
            >
                {textContent.aboutPage.hexaLabs}
                <br /> <br />
                {textContent.aboutPage.orbsIsCreating}
                <br /> <br />
                {textContent.aboutPage.hexaLabsOrbs}
                <br /> <br />
                {textContent.aboutPage.learnMore}
            </p>
            <Link to='/vision'>
                <button
                    className='linkButton'
                >
                    {textContent.aboutPage.ourVision}
                </button>
            </Link>
        </div>
    );
}

export default AboutComponent;
