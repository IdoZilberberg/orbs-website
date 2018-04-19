import React from 'react';
import hexaImg from '../../img/aboutPage/hexaIcon.png'
import Link from 'gatsby-link';
import ScrollAnimation from 'react-animate-on-scroll';

class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.data.allIndexJson.edges[0].node.aboutPage
        }
    }
    render() {
        const { content } = this.state;
        return (
            <div className='contentPage'>
                <h1
                    className='aboutPageTitle'
                >
                    {content.about}
                </h1>
                <ScrollAnimation
                    animateIn='fadeInAnimationContainer'
                    animateOnce
                >
                    <h3
                        className='aboutPageSubtitle'
                    >
                        {content.atOrbs}
                    </h3>
                    <p
                        style={{ maxWidth: '760px' }}
                        className='pagesParagraph'
                    >
                        {content.weWantTo}
                        <br /><br />
                        {content.wereBuilding}
                        <br /><br />
                        {content.weveIncorporated}
                    </p>
                </ScrollAnimation>
                <h2
                    className='pagesSubtitle'
                >
                    {content.theOrbsEco}
                </h2>
                <ScrollAnimation
                    animateIn='fadeInAnimationContainer'
                    animateOnce
                >
                    <a
                        rel='noopener noreferrer'
                        target='_blank'
                        href='https:www.hexa-labs.com/'
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
                    {content.hexaLabs}
                    <br /> <br />
                    {content.orbsIsCreating}
                    <br /> <br />
                    {content.hexaLabsOrbs}
                    <br /> <br />
                    {content.learnMore}
                </p>
                <Link to='/vision'>
                    <button
                        className='linkButton'
                    >
                        {content.ourVision}
                    </button>
                </Link>
            </div>
        );
    }
}

export default AboutComponent;

export const query = graphql`
  query AboutPageQuery($slug: String!) {
  	allIndexJson(filter: { fields: { slug: { eq: $slug }} }) {
  		edges {
  			node {
                  aboutPage {
                      about
                      atOrbs
                      weWantTo
                      wereBuilding
                      weveIncorporated
                      theOrbsEco
                      hexaLabs
                      orbsIsCreating
                      hexaLabsOrbs
                      learnMore
                      ourVision
                  }
              }
          }
      }
  }
  `