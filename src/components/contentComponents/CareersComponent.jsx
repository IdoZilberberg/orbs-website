import React from 'react';
import textContent from 'textContentLocalisation';
import ContactsLineComponent from 'components/ContactsLineComponent'
import VacanciesSectionContainer from 'containers/VacanciesSectionContainer';
import { vacansies } from 'consts/vacansies'

const CareersComponent = () => {
    return (
        <div className='contentPage'>
            <h1 className='careersPageTitle'>
                {textContent.careersPage.doYouWantToBe}
                <br />
                {textContent.careersPage.theNextGeneration}
                <br />
                {textContent.careersPage.blockchainTechnology}
            </h1>
            <h4 className='careersPageSubtitle'>
                {textContent.careersPage.wereLooking}
                <br />
                {textContent.careersPage.aboutTheFuture}
            </h4>
            <hr 
                size='1'
                color='white'
                width='15px'
            />
            <VacanciesSectionContainer
                vacanciesCollection={vacansies}
            />
            <ContactsLineComponent />
        </div>
    );
}

export default CareersComponent;
