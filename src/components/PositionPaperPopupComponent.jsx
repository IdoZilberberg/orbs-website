import React from 'react';
import LogoComponent from './LogoComponent'

class PositionPaperPopupComponent extends React.Component {
    constructor(props) {
        super(props);
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
        const { popupTrigger } = this.state;
        let popupDisplayState = popupTrigger ? 'block' : 'none'
        return (
            <button className='linkButton'>
                <a
                    onClick={popupSwitch}
                >
                    {content.readThePosition}
                </a>
                <div
                    className='fullScreenPopup'
                    style={{ display: popupDisplayState }}
                >
                    <div className='fullScreenPopupPage'>
                        <div className='fullScreenPopupPageContainer'>
                            <LogoComponent
                                logoBlockClass='fullScreenPopupLogoBlock'
                                logoImgClass='fullScreenPopupImg'
                                logoNameClass='fullScreenPopupName'
                            />
                            <div
                                onClick={popupSwitch}
                                className='positionPaperCloseButton'
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="25.974998474121094 25.975000381469727 148.05001831054688 148.0500030517578"
                                    role="img"
                                    preserveAspectRatio="xMidYMid meet"
                                    style={{ strokWidth: '0px' }}
                                >
                                    <g>
                                        <path d="M172.9 167.6L105.3 100l67.6-67.6c1.5-1.5 1.5-3.8 0-5.3s-3.8-1.5-5.3 0L100 94.7 32.4 27.1c-1.5-1.5-3.8-1.5-5.3 0s-1.5 3.8 0 5.3L94.7 100l-67.6 67.6c-1.5 1.5-1.5 3.8 0 5.3s3.8 1.5 5.3 0l67.6-67.6 67.6 67.6c1.5 1.5 3.8 1.5 5.3 0s1.5-3.8 0-5.3z" />
                                    </g>
                                </svg>
                            </div>
                            <div className='fullScreenPopupContent'>
                                <h1 className='positionPaperPopupTitle'>
                                    {content.positionPaper}
                                </h1>
                                <p className='positionPaperPopupSubtitle'>
                                    {content.getAllOf}
                                </p>
                                <a
                                    className='positionPaperPopupOpenButton'
                                    target='_blank'
                                    rel='noopner noref'
                                    href='/position-paper.pdf'
                                >
                                    {content.open}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </button>
        )
    }
}

export default PositionPaperPopupComponent;