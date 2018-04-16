import React from 'react';
import Popup from 'reactjs-popup';
import textContent from 'textContentLocalisation';
import LogoComponent from './LogoComponent';
import ContactFormComponent from './ContactFormComponent';

const ContactPopupComponent = () => {
    return (
        <Popup
            trigger=
            {<a className='defaultNavigationMenuItem'>
                {textContent.navigation.contact}
            </a>}
        >{
            close => (
                <div className='contactPopup'>
                    <div className='contactPopupBackgroundContainer' />
                    <div className='contactPopupPage'>
                        <div className='contactPopupPageContainer'>
                            <div
                                className='contactCloseButton'
                                onClick={close}
                                title={textContent.contactForm.backToSite}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="25.89999771118164 25.899999618530273 148.20001220703125 148.20001220703125"
                                    role="img"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <g>
                                        <path
                                            className='contactCloseButton'
                                            d="M171.3 158.4L113 100l58.4-58.4c3.6-3.6 3.6-9.4 0-13s-9.4-3.6-13 0L100 87 41.6 28.7c-3.6-3.6-9.4-3.6-13 0s-3.6 9.4 0 13L87 100l-58.4 58.4c-3.6 3.6-3.6 9.4 0 13s9.4 3.6 13 0L100 113l58.4 58.4c3.6 3.6 9.4 3.6 13 0s3.5-9.5-.1-13z"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div className='contactPopupContent'>

                                <LogoComponent
                                    logoBlockClass='contactPopupLogoBlock'
                                    logoImgClass='contactPopupImg'
                                    logoNameClass='contactPopupName'
                                />
                                <ContactFormComponent />
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </Popup>
    );
}

export default ContactPopupComponent;
