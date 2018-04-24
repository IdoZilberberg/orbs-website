import React from 'react';
import Link from 'gatsby-link';
import MapAnimationComponent from '../../components/MapAnimationComponent';
import technologyWeb from '../../img/technologyPage/technologyWeb.png';
import tech5 from '../../img/technologyPage/tech5.png';
import ScrollAnimation from 'react-animate-on-scroll';
import outline from '../../img/technologyPage/outline.png';
import TimelineComponent from '../../components/TimelineComponent';
import PositionPaperPopupComponent from '../../components/PositionPaperPopupComponent'


class TechnologyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.data.allIndexJson.edges[0].node.technologyPage,
            positionPaperContent: props.data.allIndexJson.edges[0].node.positionPaper,
            timelineContent: props.data.allIndexJson.edges[0].node.timeline,
        }
    }
    render() {
        const { content, positionPaperContent, timelineContent } = this.state;
        return (
            <div className='contentPage'>
                <h1
                    className='technologyPageTitle'
                >{content.technology}</h1>
                <p
                    className='pagesParagraph'
                >
                    {content.theOrbsPlatformIsABlockchain}
                    <br />
                    {content.applications}
                    <br />
                    {content.cloudComputing}
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
                >{content.theOrbsPlatformIsMadeUp}</h4>
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
                            {content.consensusBasedLeftFirst}
                            <br />
                            {content.consensusBasedLeftSecond}
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
                            {content.consensusBasedRightFirst}
                            <br />
                            {content.consensusBasedRightSecond}
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
                    {content.theCoreDifference}
                    <br />
                    {content.upForTheConsumer}
                </p>
                <PositionPaperPopupComponent
                    content={positionPaperContent}
                />
                <hr
                    color='#546095'
                    width='100%'
                    size='1'
                />
                <h2
                    className='technologySubtitle'
                >
                    {content.architecture}
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
                        {content.consensusAlgorithm}
                    </h2>
                </div>
                <a>
                    <button
                        className='linkButton'
                    >
                        {content.technicalPaper}
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
                        {content.virtualPrivate}
                    </h2>
                    <p
                        className='technologyPagesParagraph'
                    >{content.theOrbsPlatformSupports}</p>
                </div>
                <div className='technologyParagraphContainer'>
                    <h2
                        style={{ fontSize: '1.7em' }}
                        className='technologySubtitle'
                    >
                        {content.infrastructureMarketplace}
                    </h2>
                    <p
                        className='technologyPagesParagraph'
                    >
                        {content.theOrbsMarketplace}
                        <br />
                        {content.theseSpecialized}
                    </p>
                </div>
                <h2
                    className='technologySubtitle'
                >
                    {content.benefits}</h2>
                <h3
                    className='technologyPageParagraphSubTitle'
                >
                    {content.theOrbsPlatformIsBuilt}
                    <br />
                    {content.andPredictable}
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
                            {content.consumerScale}
                        </h5>
                        <p
                            className='technologyPageListItemContent'
                        >
                            {content.theNetworkIsDesigned}
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
                            {content.serviceLevel}
                        </h5>
                        <p
                            className='technologyPageListItemContent'
                        >
                            {content.thePlatformIsBuilt}
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
                            {content.evolvingComplience}
                        </h5>
                        <p
                            className='technologyPageListItemContent'
                        >
                            {content.orbsOffers}
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
                            {content.modernDeployment}
                        </h5>
                        <p
                            className='technologyPageListItemContent'
                        >
                            {content.largeScale}
                        </p>
                        <hr
                            color='#546095'
                            width='100%'
                            size='1'
                        />
                    </div>
                </ScrollAnimation>
                <TimelineComponent
                    content={timelineContent}
                />
                <Link to='/clients'>
                    <button
                        className='linkButton'
                    >
                        {content.ourClients}
                    </button>
                </Link>
            </div>
        );
    }
}

export default TechnologyComponent;


export const query = graphql`
query TechnologyPageQuery($slug: String!) {
	allIndexJson(filter: { fields: { slug: { eq: $slug }} }) {
		edges {
			node {
                technologyPage {
                    technology
                    theOrbsPlatformIsABlockchain
                    applications
                    cloudComputing
                    theOrbsPlatformIsMadeUp
                    consensusBasedLeftFirst
                    consensusBasedLeftSecond
                    consensusBasedRightFirst
                    consensusBasedRightSecond
                    theCoreDifference
                    upForTheConsumer
                    architecture
                    consensusAlgorithm
                    technicalPaper
                    virtualPrivate
                    theOrbsPlatformSupports
                    infrastructureMarketplace
                    theOrbsMarketplace
                    theseSpecialized
                    benefits
                    theOrbsPlatformIsBuilt
                    andPredictable
                    consumerScale
                    theNetworkIsDesigned
                    serviceLevel
                    thePlatformIsBuilt
                    evolvingComplience
                    orbsOffers
                    modernDeployment
                    largeScale
                    ourClients
                }
                positionPaper {
                    readThePosition
                    positionPaper
                    getAllOf
                    open
                }
                timeline {
                    timeline
                    commingSoon   
                }
            }
        }
    }
}
`
