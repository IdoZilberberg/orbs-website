import React from 'react';
import textContent from 'textContentLocalisation';
import TeamContainer from 'containers/TeamContainer';
import { workers } from 'consts/workers';

const TeamComponent = () => {
    return (
        <div className='contentPage'>
            <h1
                className='teamPageTitle'
            >
                {textContent.teamPage.team}
            </h1>
            <h4 className='teamPageSubtitle'>
                {textContent.teamPage.orbsIsMadeUp}
                <br />
                {textContent.teamPage.engineersKeeping}
            </h4>
            <TeamContainer
                team={workers}
            />
        </div>
    );
}

export default TeamComponent;
