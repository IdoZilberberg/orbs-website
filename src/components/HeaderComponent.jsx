import React from 'react';
import NavigationComponent from 'components/NavigationComponent';
import ContactPopupComponent from 'components/ContactPopupComponent';
import SubscribePopupComponent from 'components/SubscribePopupComponent';
import LogoComponent from 'components/LogoComponent';

const HeaderComponent = () => {
    return (
        <header>
            <div className='headerContent'>
                <LogoComponent />
                <div className='headerNavigation'>
                    <NavigationComponent />
                    <ContactPopupComponent />
                    <SubscribePopupComponent />
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