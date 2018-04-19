import React from 'react';
import tech6 from '../img/technologyPage/tech6.png';
import ScrollAnimation from 'react-animate-on-scroll';

const TimelineComponent = ({ content }) => {
    return (
        <div>
            <h2
                className='technologySubtitle'
            >
                {content.timeline}
            </h2>
            <div className='timeLine'>
                <ScrollAnimation
                    animateIn='fadeInAnimationContainer'
                    delay={2}
                    animateOnce
                >
                    <div className='timelineYear'>
                        2017
                    </div>
                </ScrollAnimation>
                <div
                    style={{ paddingBottom: '52%' }}
                    className='timelineVertical'
                />

                <div
                    style={{ paddingBottom: '52%' }}
                    className='timelineBlocksContainer'
                >
                    <ScrollAnimation
                        animateIn='fadeInAnimationContainer'
                        delay={1}
                        animateOnce
                    >
                        <div
                            style={{ paddingTop: '5%' }}
                            className='timelineBlockLeft'
                        >
                            <span className='timelineSectionTitle'>
                                {content.commingSoon}
                            </span>
                            <span className='timelineSectionAttribute'>
                                Q1
                            </span>
                            <div className='timelineImgAnimationContainer'>
                                <ScrollAnimation
                                    animateIn='timelineImgZoomContainer'
                                    delay={2}
                                >
                                    <img
                                        className='timelineImg'
                                        src={tech6}
                                        alt='technology'
                                    />

                                </ScrollAnimation>
                            </div>
                            <div className='timelineBlockHorisontal' />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn='fadeInAnimationContainer'
                        delay={1}
                        animateOnce
                    >
                        <div
                            style={{ paddingTop: '10%' }}
                            className='timelineBlockRight'
                        >
                            <span className='timelineSectionTitle'>
                                {content.commingSoon}
                            </span>
                            <span className='timelineSectionAttribute'>
                                Q2
                            </span>
                            <div className='timelineImgAnimationContainer'>
                                <ScrollAnimation
                                    animateIn='timelineImgZoomContainer'
                                    delay={2}
                                >
                                    <img
                                        className='timelineImg'
                                        src={tech6}
                                        alt='technology'
                                    />

                                </ScrollAnimation>
                            </div>
                            <div className='timelineBlockHorisontal' />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn='fadeInAnimationContainer'
                        delay={1}
                        animateOnce
                    >
                        <div
                            style={{ paddingTop: '7%' }}
                            className='timelineBlockLeft'
                        >
                            <span className='timelineSectionTitle'>
                                {content.commingSoon}
                            </span>
                            <span className='timelineSectionAttribute'>
                                Q3
                            </span>
                            <div className='timelineImgAnimationContainer'>
                                <ScrollAnimation
                                    animateIn='timelineImgZoomContainer'
                                    delay={2}
                                >
                                    <img
                                        className='timelineImg'
                                        src={tech6}
                                        alt='technology'
                                    />

                                </ScrollAnimation>
                            </div>
                            <div className='timelineBlockHorisontal' />
                        </div>
                    </ScrollAnimation>
                </div>
                <div className='timelineYear'>
                    2018
                </div>
                <div
                    style={{ paddingBottom: '15.5%' }}
                    className='timelineVertical'
                />
                <div
                    style={{ paddingBottom: '15.5%' }}
                    className='timelineBlocksContainer'
                >
                    <ScrollAnimation
                        animateIn='fadeInAnimationContainer'
                        delay={1}
                        animateOnce
                    >
                        <div
                            style={{ paddingTop: '5%' }}
                            className='timelineBlockRight'
                        >
                            <span className='timelineSectionTitle'>
                                {content.commingSoon}
                            </span>
                            <span className='timelineSectionAttribute'>
                                Q4
                            </span>
                            <div className='timelineImgAnimationContainer'>
                                <ScrollAnimation
                                    animateIn='timelineImgZoomContainer'
                                    delay={2}
                                >
                                    <img
                                        className='timelineImg'
                                        src={tech6}
                                        alt='technology'
                                    />

                                </ScrollAnimation>
                            </div>
                            <div className='timelineBlockHorisontal' />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
};

export default TimelineComponent;