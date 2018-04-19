import React from 'react';
import NavigationComponent from './NavigationComponent';
import ContactPopupComponent from './ContactPopupComponent';
import SubscribePopupComponent from './SubscribePopupComponent';
import LogoComponent from './LogoComponent';
import Link from 'gatsby-link';

const HeaderComponent = ({ content, pathContext }) => {
    return (
        <header>
            <div className='headerContent'>
                <LogoComponent />
                <div className='headerNavigation'>
                    <NavigationComponent
                        pathContext={pathContext}
                        content={content.navigation}
                    />
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
                </div>
            </div>
            <hr
                color='black'
                width='100%'
                size='1'
            />
        </header>
    )
}

export default HeaderComponent;