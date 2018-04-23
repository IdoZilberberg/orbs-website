import React from 'react';
import LogoComponent from '../../components/LogoComponent';
import FooterComponent from '../../components/FooterComponent';
import cityVideo from '../../img/main/cityVideo.mp4';
import Link from 'gatsby-link';
import japan from '../../img/languages/japan.svg';
import us from '../../img/languages/us.svg';


class LandingPageContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            footer: {
                footerContent: props.data.allIndexJson.edges[0].node.footer,
                navigation: props.data.allIndexJson.edges[0].node.navigation
            },
            content: props.data.allIndexJson.edges[0].node.landing,
            pathContext: props.pathContext.slug
        }
    }
    render() {
        const { content, pathContext, footer } = this.state;
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
                    <Link to='jp'>
                        <img
                            className='languageImg'
                            src={japan}
                            alt='japan'
                        />
                    </Link>
                    <Link to='/'>
                        <img
                            className='languageImg'
                            src={us}
                            alt='us'
                        />
                    </Link>
                    <h1 className='landingHeader'>{content.header}</h1>
                    <p className='landingSubtitle' >
                        {content.orbsIsAPublic}
                        <br />
                        {content.fromSLA}
                    </p>
                    <Link to={`${pathContext}home`} className='landingButton'>
                        {content.button}
                    </Link>
                </div>
                <FooterComponent
                    content={footer}
                    pathContext={pathContext}
                />
            </div >
        );
    }
};

export default LandingPageContainer;

export const query = graphql`
query LandingPageQuery($slug: String!) {
	allIndexJson(filter: { fields: { slug: { eq: $slug }} }) {
		edges {
			node {
                landing {
                    header
                    orbsIsAPublic
                    fromSLA
                    button
                }
                navigation {
                    about
                    vision
                    technology
                    clients
                    careers
                    team
                    news
                    contact
                    subscribe 
                }
                footer {
                    allRightsReserved
                    termOfUse
                    privatPolicy
                }
            }
		}
	}
}
`