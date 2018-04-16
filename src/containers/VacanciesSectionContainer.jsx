import React from 'react';
import VacancyContainer from './VacancyContainer';
import textContent from 'textContentLocalisation';

const VacanciesSectionContainer = ({ vacanciesCollection }) => {
    return (
        <div>
            <h3
                className='vacanciesSubtitle'
            >
                {textContent.vacancy.openPositions}
            </h3>
            <div className='vacanciesContainer'>
                {vacanciesCollection.map(
                    (vacancy, index) =>
                        <VacancyContainer
                            key={index}
                            vacancy={vacancy}
                        />
                )}
            </div>
        </div>
    );
};

export default VacanciesSectionContainer;
