import React from 'react';
import textContent from 'textContentLocalisation';
import ContactFormComponent from 'components/ContactFormComponent';

const ClientsComponent = () => {
    return (
        <div
            style={{ maxWidth: '1080px' }}
            className='contentPage'
        >
            <h1
                className='clientsPageTitle'
            >
                {textContent.clientsPage.whatIsYour}
                <br />
                {textContent.clientsPage.mission}
            </h1>
            <div className='youtubeVideoContainer'>
                <iframe
                    title='Youtube frame'
                    width='1080' height='624'
                    src='https://www.youtube.com/embed/-pvnG6xEm2c?rel=0'
                    frameBorder='0'
                    allowautoplay='true'
                    allowencriptedmedia='true'
                    allowFullScreen
                />
            </div>
            <h3
                className='clientsPageSubtitle'
            >
                {textContent.clientsPage.letsAccomplish}
            </h3>
            <div className='contactFormContainer'>
                <ContactFormComponent />
                <h3>{textContent.clientsPage.updatesComming}</h3>
            </div>
        </div>
    );
}

export default ClientsComponent;
