import React from 'react';
import WorkerComponent from '../components/WorkerComponent'

const TeamContainer = ({ team }) => {
    return (
        <div className='teamContainer'>
            {
                team.map((worker, index) =>
                    <WorkerComponent
                        key={index}
                        worker={worker}
                    />
                )
            }
        </div>
    );
};

export default TeamContainer;