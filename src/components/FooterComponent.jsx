import React, { Component } from 'react';
import LogoComponent from './LogoComponent';
import NavigationComponent from './NavigationComponent';
import textContent from 'textContentLocalisation';
import ContactPopupComponent from './ContactPopupComponent';
import cityVideo from 'img/main/cityVideo.mp4';
import ScrollAnimation from 'react-animate-on-scroll';

class FooterComponent extends Component {
    render() {
        return (
            <footer>
                <video
                    className='footerVideo'
                    loop='loop'
                    preload='auto'
                    autoPlay='true'
                    width='1905'
                    height='1072'
                >
                    <source src={cityVideo} type="video/mp4" />
                </video>
                <div className='footerBackgroundContainer' />
                <div style={{ position: 'relative' }}>
                    <hr
                        width='100%'
                        size='1'
                        color='#546095'
                    />
                    <LogoComponent />
                    <div className='footerNavigation'>
                        <NavigationComponent
                            currentPath={this.props.currentPath}
                        />
                        <ContactPopupComponent />
                    </div>
                    <ScrollAnimation
                        offset={1000}
                        animateOnce
                        animateIn='footerAnimateContainer'
                    >
                        <div className='copyright'>{textContent.footer.allRightsReserved}</div>
                        <div>
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                className='footerLinks'
                                href='https://docs.google.com/document/d/1nQ43g9o-HPKo5aSK3iBckG7hZdvQqXPQVdE6iHOHZA0/edit'
                            >
                                {textContent.footer.termOfUse}
                            </a>
                            <a
                                rel='noopener noreferrer'
                                target='_blank'
                                className='footerLinks'
                                href='https://docs.google.com/document/d/1Ks5vRBaW58AnWibdJdNQbEP_myZypsNVsgqj8byIcPI/edit'
                            >
                                {textContent.footer.privatPolicy}
                            </a>
                        </div>
                    </ScrollAnimation>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;
