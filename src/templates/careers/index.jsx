import React from 'react';
import ContactsLineComponent from '../../components/ContactsLineComponent'
import VacansiesSectionContainer from '../../containers/VacansiesSectionContainer';

class CareersComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {
                ...props.data.allIndexJson.edges[0].node.careersPage,
                backTosite: props.data.allIndexJson.edges[0].node.contactForm.backToSite
            },
            vacancyContent: props.data.allIndexJson.edges[0].node.vacancy,
            vacansiesCollection: props.data.allIndexJson.edges[0].node.vacansies
        }
    }
    render() {
        const {
            content,
            vacancyContent,
            vacansiesCollection
            } = this.state;
        return (
            <div className='contentPage'>
                <h1 className='careersPageTitle'>
                    {content.doYouWantToBe}
                    <br />
                    {content.theNextGeneration}
                    <br />
                    {content.blockchainTechnology}
                </h1>
                <h4 className='careersPageSubtitle'>
                    {content.wereLooking}
                    <br />
                    {content.aboutTheFuture}
                </h4>
                <hr
                    size='1'
                    color='white'
                    width='15px'
                />
                <VacansiesSectionContainer
                    content={vacancyContent}
                    vacansiesCollection={vacansiesCollection}
                />
                <ContactsLineComponent />
            </div>
        );
    }
}

export default CareersComponent;

export const query = graphql`
query CareersPageQuery($slug: String!) {
	allIndexJson(filter: { fields: { slug: { eq: $slug }} }) {
		edges {
			node {
                contactForm {
                    backToSite
                }
                careersPage {
                    doYouWantToBe
                    theNextGeneration
                    blockchainTechnology
                    wereLooking
                    aboutTheFuture
                }
                vacancy {
                    openPositions
                    requiremants
                    goodToHave
                    toApply
                    sendEmailTo
                    withYourCV
                }
                vacansies {
                    title
                    subtitle
                    sections {
                        name
                        list
                    }
                }
            }
        }
    }
}
`
