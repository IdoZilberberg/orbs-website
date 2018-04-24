import React from 'react'
import PropTypes from 'prop-types'
import HeaderComponent from '../../components/HeaderComponent'
import FooterComponent from '../../components/FooterComponent'
import cloudVideo from '../../img/main/cloudVideo.mp4';
import Link from 'gatsby-link';
import '../../styles/index.scss';
import LogoComponent from '../../components/LogoComponent';

class ContentLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pathContext: props.layoutContext.slug,
      header: {
          navigation: props.data.allIndexJson.edges[0].node.navigation,
          contactPopup: props.data.allIndexJson.edges[0].node.contactForm,
          subscribePopup: props.data.allIndexJson.edges[0].node.subscribeForm
      },
      footer: {
        navigation: {
          navigation: props.data.allIndexJson.edges[0].node.navigation,
          contactPopup: props.data.allIndexJson.edges[0].node.contactForm,
          subscribePopup: props.data.allIndexJson.edges[0].node.subscribeForm
        },
        footerContent: props.data.allIndexJson.edges[0].node.footer
      }
    }
  };
  render() {
    const { pathContext, header, footer } = this.state;
    return (
      <div>
        <video
          className='video'
          loop='loop'
          preload='auto'
          autoPlay='true'
          width='1905'
          height='1072'
        >
          <source src={cloudVideo} type="video/mp4" />
        </video>
        <div className='backgroundContainer' />
        {
          this.props.location.pathname === '/'
            ? '' :
            <HeaderComponent
              pathContext={pathContext}
              content={header}
            />
        }
        {this.props.children()}
        <FooterComponent
          pathContext={pathContext}
          content={footer}
        />
      </div>
    )

    Layout.propTypes = {
      children: PropTypes.func,
    }
  }
}

export default ContentLayout;

export const query = graphql`
 query ContentLayoutQuery($slug: String!) {
 	allIndexJson(filter: { fields: { slug: { eq: $slug }} }) {
 		edges {
 			node {
         navigation {
             about
             technology
             clients
             careers
             team
             news
             contact
             subscribe
             positionPaper
         }
         contactForm {
             getInTouch
             name
             email
             message
             send
             backToSite
         }
         subscribeForm {
             neverMiss
             yourEmail
             subscribe
             pleaseFill
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