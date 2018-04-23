import React from 'react';

class SubscribePopupComponent extends React.Component {
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
            <div>
                <a
                    onClick={popupSwitch}
                    className='outerSubscribeButton'
                >
                    {content.subscribe}
                </a>
                <div className='subscribeContainer' style={{ display: popupDisplayState }}>
                    <div className='subscribeForm'>
                        <svg
                            className='subscribeCloseButton'
                            onClick={popupSwitch}
                            title={content.backToSite}
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='25.974998474121094 25.975000381469727 148.05001831054688 148.0500030517578'
                            role='img'
                            preserveAspectRatio='xMidYMid meet'
                            style={{ strokeWidth: '0px' }}
                        >
                            <g>
                                <path d='M172.9 167.6L105.3 100l67.6-67.6c1.5-1.5 1.5-3.8 0-5.3s-3.8-1.5-5.3 0L100 94.7 32.4 27.1c-1.5-1.5-3.8-1.5-5.3 0s-1.5 3.8 0 5.3L94.7 100l-67.6 67.6c-1.5 1.5-1.5 3.8 0 5.3s3.8 1.5 5.3 0l67.6-67.6 67.6 67.6c1.5 1.5 3.8 1.5 5.3 0s1.5-3.8 0-5.3z' />
                            </g>
                        </svg>
                        <div className='subscribeFormContent'>
                            <h1 className='subscribeTitle'>
                                {content.neverMiss}
                            </h1>
                            <div>
                                <div id='mc_embed_signup'>
                                    <form
                                        action='https://network.us17.list-manage.com/subscribe/post?u=bdf19765ac1dd400b572135f6&amp;id=a3a8b7c212'
                                        method='post'
                                        id='mc-embedded-subscribe-form'
                                        name='mc-embedded-subscribe-form'
                                        className='validate'
                                        target='_blank'
                                        noValidate
                                    >
                                        <div id='mc_embed_signup_scroll'>
                                            <div className='mc-field-group'>
                                                <input
                                                    name='EMAIL'
                                                    id='mce-EMAIL'
                                                    className='required email'
                                                    type='email'
                                                    placeholder={content.yourEmail}
                                                    title={content.pleaseFill}
                                                />
                                            </div>
                                            <div
                                                id='mce-responses'
                                                className='clear'
                                            >
                                                <div
                                                    className='response'
                                                    id='mce-error-response'
                                                    style={{ display: 'none' }}
                                                />
                                                <div
                                                    className='response'
                                                    id='mce-success-response'
                                                    style={{ display: 'none' }}
                                                />
                                            </div>
                                            <div
                                                style={{ position: 'absolute', left: '-5000px' }}
                                                role={{ 'aria-hidden': 'true' }}
                                            >
                                                <input
                                                    type='text'
                                                    name='b_bdf19765ac1dd400b572135f6_a3a8b7c212'
                                                    tabIndex='-1'
                                                    value=''
                                                />
                                            </div>
                                            <div className='clear'>
                                                <input
                                                    type='submit'
                                                    value='Subscribe'
                                                    name={content.subscribe}
                                                    id='mc-embedded-subscribe'
                                                    className='innerFormSubscribeButton'
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SubscribePopupComponent;

