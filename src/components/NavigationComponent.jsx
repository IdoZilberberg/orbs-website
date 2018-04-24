import React from 'react';
import Link from 'gatsby-link';
import ContactPopupComponent from './ContactPopupComponent';
import SubscribePopupComponent from './SubscribePopupComponent';

const NavigationComponent = ({ content, pathContext }) => {
    return (
        <nav className='defaultNavigationContainer'>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}about`}
            >
                {content.navigation.about}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}technology`}
            >
                {content.navigation.technology}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}clients`}
            >
                {content.navigation.clients}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}careers`}
            >
                {content.navigation.careers}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}team`}
            >
                {content.navigation.team}
            </Link>
            <Link
                activeStyle={{ color: '#373D6B' }}
                className='defaultNavigationMenuItem'
                to={`${pathContext}news`}
            >
                {content.navigation.news}
            </Link>
            <ContactPopupComponent
                content={{
                    ...content.contactPopup,
                    contact: content.navigation.contact
                }}
            />
            <SubscribePopupComponent content={{
                ...content.subscribePopup,
                subscribe: content.navigation.subscribe,
                backToSite: content.contactPopup.backToSite
            }}
            />
            <a
                className='defaultNavigationMenuItem'
                target='_blank'
                rel='noopener noref'
                href='/position-paper.pdf'
            >
                {content.navigation.positionPaper}
            </a>
        </nav>
    );
};


export default NavigationComponent;

