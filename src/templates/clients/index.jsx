import React from 'react';
import ContactFormComponent from '../../components/ContactFormComponent';

class ClientsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.data.allIndexJson.edges[0].node.clientsPage,
            contactFormContent: props.data.allIndexJson.edges[0].node.contactForm
        }
    }
    render() {
        const { content, contactFormContent } = this.state;
        return (
            <div
                style={{ maxWidth: '1080px' }}
                className='contentPage'
            >
                <h1
                    className='clientsPageTitle'
                >
                    {content.whatIsYour}
                    <br />
                    {content.mission}
                </h1>
                <div className='youtubeVideoContainer'>
                    <iframe
                        title='Youtube frame'
                        width='1080' height='624'
                        src='https://www.youtube.com/embed/-pvnG6xEm2c?rel=0'
                        frameBorder='0'
                        allowFullScreen
                    />
                </div>
                <h3
                    className='clientsPageSubtitle'
                >
                    {content.letsAccomplish}
                </h3>
                <div className='contactFormContainer'>
                    <ContactFormComponent
                        content={contactFormContent}
                    />
                    <h3>{content.updatesComming}</h3>
                </div>
            </div>
        );
    }
}

export default ClientsComponent;

export const query = graphql`
query ClientsPageQuery($slug: String!) {
	allIndexJson(filter: { fields: { slug: { eq: $slug }} }) {
		edges {
			node {
                contactForm {
                    getInTouch
                    name
                    email
                    message
                    send
                }
                clientsPage {
                    whatIsYour
                    mission
                    letsAccomplish
                }
            }
        }
    }
}
`
