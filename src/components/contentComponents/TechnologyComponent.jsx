import React from 'react';
import textContent from 'textContentLocalisation';
import { Link } from 'react-router-dom';
import MapAnimationComponent from 'components/MapAnimationComponent';
import technologyWeb from 'img/technologyPage/technologyWeb.png';
import tech5 from 'img/technologyPage/tech5.png';
import ScrollAnimation from 'react-animate-on-scroll';
import outline from 'img/technologyPage/outline.png';
import TimelineComponent from 'components/TimelineComponent';


const TechnologyComponent = () => {
    return (
        <div className='contentPage'>
            <h1
                className='technologyPageTitle'
            >{textContent.technologyPage.technology}</h1>
            <p
                className='pagesParagraph'
            >
                {textContent.technologyPage.theOrbsPlatformIsABlockchain}
                <br />
                {textContent.technologyPage.applications}
                <br />
                {textContent.technologyPage.cloudComputing}
            </p>
            <div className='technologyWebContainer'>
                <div>
                    <ScrollAnimation
                        duration={2}
                        animateIn='technologyWebImg'
                        animateOnce
                        style={{
                            position: 'absolute',
                            width: '61.2%',
                            left: '20%'
                        }}>
                        <img
                            style={{ width: '100%' }}
                            src={technologyWeb}
                            alt='Technology'
                        />
                    </ScrollAnimation>
                </div>
            </div>
            <h4
                className='technologyPageParagraphTitle'
            >{textContent.technologyPage.theOrbsPlatformIsMadeUp}</h4>
            <div className='technologyPageList'>
                <div
                    className='technologyPageListItem'
                >
                    <hr
                        color='#546095'
                        width='250px'
                        size='1'
                    />
                    <p
                        style={{ textAlign: 'center' }}
                        className='technologyPageListItemContent'
                    >
                        {textContent.technologyPage.consensusBasedLeftFirst}
                        <br />
                        {textContent.technologyPage.consensusBasedLeftSecond}
                    </p>
                    <hr
                        color='#546095'
                        width='250px'
                        size='1'
                    />
                </div>
                <div className='technologyPageListItem'>
                    <hr
                        color='#546095'
                        width='250px'
                        size='1'
                    />
                    <p
                        style={{ textAlign: 'center' }}
                        className='technologyPageListItemContent'
                    >
                        {textContent.technologyPage.consensusBasedRightFirst}
                        <br />
                        {textContent.technologyPage.consensusBasedRightSecond}
                    </p>
                    <hr
                        color='#546095'
                        width='250px'
                        size='1'
                    />
                </div>
            </div>
            <MapAnimationComponent />
            <p
                className='pagesParagraph'
            >
                {textContent.technologyPage.theCoreDifference}
                <br />
                {textContent.technologyPage.upForTheConsumer}
            </p>
            <a>
                <button
                    className='linkButton'
                >
                    {textContent.technologyPage.whitepaper}
                </button>
            </a>
            <hr
                color='#546095'
                width='100%'
                size='1'
            />
            <h2
                className='technologySubtitle'
            >
                {textContent.technologyPage.architecture}
            </h2>
            <ScrollAnimation
                style={{
                    maxWidth: '928px',
                    paddingBottom: '51.32%',
                    backgroundImage: `url(${outline})`,
                    backgroundSize: '100%'
                }}
                animateIn='fadeInAnimationContainer'
                animatedOnce
                duration={2}
            />
            <div className='technologySubtitleContainer'>
                <h2 className='technologySubtitle'>
                    {textContent.technologyPage.consensusAlgorithm}
                </h2>
            </div>
            <a>
                <button
                    className='linkButton'
                >
                    {textContent.technologyPage.technicalPaper}
                </button>
            </a>
            <ScrollAnimation
                style={{
                    position: 'absolute',
                    right: '-80%',
                    width: '39.7%'
                }}
                animateIn='technologyImg'
                initiallyVisible
                animateOnce
                duration={3}
            >
                <img src={tech5} alt='Technology' />
            </ScrollAnimation>
            <div className='technologyParagraphContainer'>
                <h2
                    style={{ fontSize: '2em' }}
                    className='technologySubtitle'
                >
                    {textContent.technologyPage.virtualPrivate}
                </h2>
                <p
                    className='technologyPagesParagraph'
                >{textContent.technologyPage.theOrbsPlatformSupports}</p>
            </div>
            <div className='technologyParagraphContainer'>
                <h2
                    style={{ fontSize: '1.7em' }}
                    className='technologySubtitle'
                >
                    {textContent.technologyPage.infrastructureMarketplace}
                </h2>
                <p
                    className='technologyPagesParagraph'
                >
                    {textContent.technologyPage.theOrbsMarketplace}
                    <br />
                    {textContent.technologyPage.theseSpecialized}
                </p>
            </div>
            <h2
                className='technologySubtitle'
            >
                {textContent.technologyPage.benefits}</h2>
            <h3
                className='technologyPageParagraphSubTitle'
            >
                {textContent.technologyPage.theOrbsPlatformIsBuilt}
                <br />
                {textContent.technologyPage.andPredictable}
            </h3>
            <ScrollAnimation animateIn='technologyPageList' >
                <div className='technologyPageListItem'>
                    <hr
                        color='#546095'
                        width='100%'
                        size='1'
                    />
                    <h5
                        className='technologyPageListItemTitle'
                    >
                        {textContent.technologyPage.consumerScale}
                    </h5>
                    <p
                        className='technologyPageListItemContent'
                    >
                        {textContent.technologyPage.theNetworkIsDesigned}
                    </p>
                </div>
                <div className='technologyPageListItem'>
                    <hr
                        color='#546095'
                        width='100%'
                        size='1'
                    />
                    <h5
                        className='technologyPageListItemTitle'
                    >
                        {textContent.technologyPage.serviceLevel}
                    </h5>
                    <p
                        className='technologyPageListItemContent'
                    >
                        {textContent.technologyPage.thePlatformIsBuilt}
                    </p>
                </div>
                <div className='technologyPageListItem'>
                    <hr
                        color='#546095'
                        width='100%'
                        size='1'
                    />
                    <h5
                        className='technologyPageListItemTitle'
                    >
                        {textContent.technologyPage.evolvingComplience}
                    </h5>
                    <p
                        className='technologyPageListItemContent'
                    >
                        {textContent.technologyPage.orbsOffers}
                    </p>
                    <hr
                        color='#546095'
                        width='100%'
                        size='1'
                    />
                </div>
                <div className='technologyPageListItem'>
                    <hr
                        color='#546095'
                        width='100%'
                        size='1'
                    />
                    <h5
                        className='technologyPageListItemTitle'
                    >
                        {textContent.technologyPage.modernDeployment}
                    </h5>
                    <p
                        className='technologyPageListItemContent'
                    >
                        {textContent.technologyPage.largeScale}
                    </p>
                    <hr
                        color='#546095'
                        width='100%'
                        size='1'
                    />
                </div>
            </ScrollAnimation>
            <TimelineComponent />
            <Link to='/clients'>
                <button
                    className='linkButton'
                >
                    {textContent.technologyPage.ourClients}
                </button>
            </Link>
        </div>
    );
}

export default TechnologyComponent;
