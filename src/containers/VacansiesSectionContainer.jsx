import React from 'react';
import VacancyContainer from './VacancyContainer';

const VacansiesSectionContainer = ({ vacansiesCollection, content }) => {
    return (
        <div>
            <h3
                className='vacanciesSubtitle'
            >
                {content.openPositions}
            </h3>
            <div className='vacanciesContainer'>
                {vacansiesCollection.map(
                    (vacancy, index) =>
                        <VacancyContainer
                            content={content}
                            key={index}
                            vacancy={vacancy}
                        />
                )}
            </div>
        </div>
    );
};

export default VacansiesSectionContainer;
