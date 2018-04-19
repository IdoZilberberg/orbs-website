import React from 'react';
import TeamContainer from '../../containers/TeamContainer';

class TeamComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.data.allIndexJson.edges[0].node.teamPage,
            team: props.data.allIndexJson.edges[0].node.team
        }
    }
    render() {
        const { content, team } = this.state;
        return (
            <div className='contentPage'>
                <h1
                    className='teamPageTitle'
                >
                    {content.team}
                </h1>
                <h4 className='teamPageSubtitle'>
                    {content.orbsIsMadeUp}
                    <br />
                    {content.engineersKeeping}
                </h4>
                <TeamContainer
                    team={team}
                />
            </div>
        );
    }
}

export default TeamComponent;

export const query = graphql`
query TeamPageQuery($slug: String!) {
	allIndexJson(filter: { fields: { slug: { eq: $slug }} }) {
		edges {
			node {
                teamPage {
                    team
                    orbsIsMadeUp
                    engineersKeeping
                }
                team {
                    name
                    position
                    description
                    imageSrc
                    link
                }
            }
        }
    }
}
`
