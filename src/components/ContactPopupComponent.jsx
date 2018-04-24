import React from 'react';
import LogoComponent from './LogoComponent';
import ContactFormComponent from './ContactFormComponent';

class ContactPopupComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            popupTrigger: false
        }
    }
    popupSwitch() {
        this.setState({ popupTrigger: !this.state.popupTrigger })
    }
    render() {
        const popupSwitch = this.popupSwitch.bind(this);
        const { content } = this.props;
        let popupDisplayState = this.state.popupTrigger ? 'block' : 'none'
        return (
            <div className='defaultNavigationMenuItem'>
                <a
                    onClick={(popupSwitch)}
                >
                    {content.contact}
                </a>
                <div className='fullScreenPopup' style={{ display: popupDisplayState }}>
                    <div className='contactPopupBackgroundContainer' />
                    <div className='fullScreenPopupPage'>
                        <div className='fullScreenPopupPageContainer'>
                            <div
                                className='contactCloseButton'
                                onClick={popupSwitch}
                                title={content.backToSite}
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
                            <div className='fullScreenPopupContent'>
                                <LogoComponent
                                    logoBlockClass='fullScreenPopupLogoBlock'
                                    logoImgClass='fullScreenPopupImg'
                                    logoNameClass='fullScreenPopupName'
                                />
                                <ContactFormComponent
                                    content={content}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ContactPopupComponent;
