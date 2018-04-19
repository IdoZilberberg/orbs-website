import React from 'react';
import LogoComponent from '../../components/LogoComponent';
import ContactsLineComponent from '../../components/ContactsLineComponent';
import Link from 'gatsby-link';
import aboutVideo from '../../img/homePage/aboutVideo.mp4';
import technologyVideo from '../../img/homePage/technologyVideo.mp4';
import clientsVideo from '../../img/homePage/clientsVideo.mp4';
import teamVideo from '../../img/homePage/teamVideo.mp4';
import newsVideo from '../../img/homePage/newsVideo.mp4';

class HomePageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathContext: props.pathContext.slug,
            content: {
                ...props.data.allIndexJson.edges[0].node.navigation,
                allRightsReserved: props.data.allIndexJson.edges[0].node.footer.allRightsReserved
            }
        }
    }
    render() {
        const { content, pathContext } = this.state;
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
                        <Link className='homePageNavigationMenuItem' id='aboutBackgroundBlock' to={`${pathContext}about`}> {content.about.toUpperCase()} </Link>
                        <Link className='homePageNavigationMenuItem' id='technologyBackgroundBlock' to={`${pathContext}technology`}> {content.technology.toUpperCase()} </Link>
                        <Link className='homePageNavigationMenuItem' id='clientsBackgroundBlock' to={`${pathContext}clients`}> {content.clients.toUpperCase()} </Link>
                        <Link className='homePageNavigationMenuItem' id='teamBackgroundBlock' to={`${pathContext}team`}> {content.team.toUpperCase()} </Link>
                        <Link className='homePageNavigationMenuItem' id='newsBackgroundBlock' to={`${pathContext}news`}> {content.news.toUpperCase()} </Link>
                    </nav>
                </div>

                <div className='homePageFooter'>
                    <ContactsLineComponent />
                    <div className='copyright'>{content.allRightsReserved}</div>
                </div>
            </div>
        );
    };
};

export default HomePageComponent;

export const query = graphql`
query HomePageQuery($slug: String!) {
	allIndexJson(filter: { fields: { slug: { eq: $slug }} }) {
		edges {
			node {
                navigation {
                  about
                  technology
                  clients
                  team
                  news
                }
                footer {
                    allRightsReserved
                }
            }
        }
    }
}
`


