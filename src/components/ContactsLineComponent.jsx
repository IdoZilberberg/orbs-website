import React from 'react';
import telegramIcon from 'img/contactsLine/telegram.png';
import twitterIcon from 'img/contactsLine/twitter.png';
import redditIcon from 'img/contactsLine/reddit.png';
import linkedInIcon from 'img/contactsLine/linkedin.png';
import mediumIcon from 'img/contactsLine/medium.png'



const ContactsLineComponent = () => {
    return (
        <div className='contactsLineContainer'>
            <a
                target='_blank'
                rel='noopener noreferrer'
                className='contactsIcon'
                href='https://t.me/orbs_network'
            >
                <img
                    src={telegramIcon}
                    alt='Telegram Icon'
                />
            </a>
            <a
                target='_blank'
                rel='noopener noreferrer'
                className='contactsIcon'
                href='https://twitter.com/orbs_network'
            >
                <img
                    src={twitterIcon}
                    alt='Twitter Icon'
                />
            </a>
            <a
                target='_blank'
                rel='noopener noreferrer'
                className='contactsIcon'
                href='https://www.reddit.com/r/ORBS_Network/'
            >
                <img
                    src={redditIcon}
                    alt='Reddit Icon'
                />
            </a>
            <a
                target='_blank'
                rel='noopener noreferrer'
                className='contactsIcon'
                href='https://www.linkedin.com/company/orbs/'
            >
                <img
                    src={linkedInIcon}
                    alt='Linkedin Icon'
                />
            </a>
            <a
                target='_blank'
                rel='noopener noreferrer'
                className='contactsIcon'
                href='https://medium.com/orbs-network'
            >
                <img
                    src={mediumIcon}
                    alt='Medium Icon'
                />
            </a>
        </div>
    );
}

export default ContactsLineComponent;
