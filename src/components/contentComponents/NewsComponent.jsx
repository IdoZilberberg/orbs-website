import React, { Component } from 'react';
import textContent from 'textContentLocalisation';
import { Link } from 'react-router-dom';
import twitterIcon from 'img/contactsLine/twitter.png';
import mediumTitleIcon from 'img/contactsLine/medium.png';
import telegramIcon from 'img/contactsLine/telegram.png';
import redditIcon from 'img/contactsLine/reddit.png';
import githubIcon from 'img/contactsLine/github.png';
import linkedInIcon from 'img/contactsLine/linkedin.png';
import mediumIcon from 'img/contactsLine/medium.png'
import newsMediaIcon from 'img/newsPage/newsMediaIcon.png'
import { mediaList } from 'consts/mediaList';

class NewsComponent extends Component {
    componentWillMount() {
        const twitterGridScript = document.createElement('script');
        const mediumUpdatesScript = document.createElement('script');
        twitterGridScript.src = 'https://platform.twitter.com/widgets.js';
        twitterGridScript.async = true;
        document.body.appendChild(twitterGridScript);
        mediumUpdatesScript.src = 'https://www.feedgrabbr.com/widget/fgwidget.js'
        mediumUpdatesScript.async = true;
        document.body.appendChild(mediumUpdatesScript);
    }
    render() {
        return (
            <div className='contentPage'>
                <h1
                    className='newsPageTitle'
                >
                    {textContent.newsPage.media}
                </h1>
                <div className='newsPageSubtitleLine'>
                    <Link to='/pressKit'>
                        <button
                            style={{ fontSize: '12px' }}
                            className='linkButton'
                        >
                            {textContent.newsPage.pressKit}
                        </button>
                    </Link>
                    <div className='newsPageContactsLine'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='newsPageContactsLineIcon'
                            href='https://t.me/orbs_network'>
                            <img
                                src={telegramIcon}
                                alt='Telegram Icon'
                            />
                        </a>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='newsPageContactsLineIcon'
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
                            className='newsPageContactsLineIcon'
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
                            className='newsPageContactsLineIcon'
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
                            className='newsPageContactsLineIcon'
                            href='https://github.com/orbs-network'
                        >
                            <img
                                src={githubIcon}
                                alt='Github Icon'
                            />
                        </a>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='newsPageContactsLineIcon'
                            href='https://medium.com/orbs-network'
                        >
                            <img
                                src={mediumIcon}
                                alt='Medium Icon'
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <div className='updatesBlocksTitleLine'>
                        <div className='newsPageUpdatesHeader'>
                            <img
                                className='newsPageIcon'
                                src={twitterIcon}
                                alt='Twitter Icon'
                            />
                            <h4
                                className='updatesBlockTitle'
                            >
                                {textContent.newsPage.twitterUpdates}
                            </h4>
                        </div>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='twitterFollowButton'
                            href='https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Fsanta%2F1.3013.37%2Fstatic%2Fexternal%2Ftwitter.html%3Falign%3Dleft%26compId%3Dcomp-jbql3a3s%26href%3Dhttps%253A%252F%252Ftwitter.com%252FOrbs_Network%26lang%3Den%26origin%3Dhttps%253A%252F%252Fwww.orbs.com%26screen_name%3DOrbs_Network%26show_count%3Dfalse%26show_screen_name%3Dtrue%26widgetType%3DFOLLOW&ref_src=twsrc%5Etfw&region=follow_link&screen_name=Orbs_Network&tw_p=followbutton'
                        >
                            <svg
                                className='twitterButtonIcon'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 300.00006 244.18703'
                            >
                                <g transform='translate(-539.18 -568.86)'>
                                    <path
                                        fill='white'
                                        d='m633.9 812.04c112.46 0 173.96-93.168 173.96-173.96 0-2.6463-0.0539-5.2806-0.1726-7.903 11.938-8.6302 22.314-19.4 30.498-31.66-10.955 4.8694-22.744 8.1474-35.111 9.6255 12.623-7.5693 22.314-19.543 26.886-33.817-11.813 7.0031-24.895 12.093-38.824 14.841-11.157-11.884-27.041-19.317-44.629-19.317-33.764 0-61.144 27.381-61.144 61.132 0 4.7978 0.5364 9.4646 1.5854 13.941-50.815-2.5569-95.874-26.886-126.03-63.88-5.2508 9.0354-8.2785 19.531-8.2785 30.73 0 21.212 10.794 39.938 27.208 50.893-10.031-0.30992-19.454-3.0635-27.69-7.6468-0.009 0.25652-0.009 0.50661-0.009 0.78077 0 29.61 21.075 54.332 49.051 59.934-5.1376 1.4006-10.543 2.1516-16.122 2.1516-3.9336 0-7.766-0.38716-11.491-1.1026 7.7838 24.293 30.355 41.971 57.115 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.7983-0.28036-14.584-0.84634 27.059 17.344 59.189 27.464 93.722 27.464'
                                    />
                                </g>
                            </svg>
                            <span className='twitterButtonLabel'>
                                {textContent.newsPage.twitterButtonFollow}
                            </span>
                            <span className='twitterButtonLabel'>
                                @orbs_network
                            </span>
                        </a>
                    </div>
                    <div className='twitterUpdatesContainer'>
                        <a
                            className="twitter-grid"
                            data-partner="tweetdeck"
                            href="https://twitter.com/orbs_network/timelines/984311951085002752?ref_src=twsrc%5Etfw"
                        >
                            Website Widget
                    </a>
                    </div>
                </div>
                <div>
                    <div className='updatesBlocksTitleLine'>
                        <div className='newsPageUpdatesHeader'>
                            <img
                                className='newsPageIcon'
                                src={mediumTitleIcon}
                                alt='Medium Icon'
                            />
                            <h4
                                className='updatesBlockTitle'
                            >
                                {textContent.newsPage.mediumUpdates}
                            </h4>
                        </div>
                        <a
                            rel='noopener noreferrer'
                            target='_blank'
                            href='https://medium.com/orbs-network'
                        >
                            <button
                                style={{ border: 'none', margin: '0' }}
                                className='linkButton'
                            >
                                {textContent.newsPage.visitOrbsBlog}
                            </button>
                        </a>
                    </div>
                    <div>
                        <div className='feedgrabbr_widget' id='fgid_0b3b5af1a2ef59714b5fbfcd0' />
                    </div>
                </div>
                <div>
                    <div
                        style={{ justifyContent: 'flex-start' }}
                        className='updatesBlocksTitleLine'
                    >
                        <img
                            className='newsMediaIcon'
                            src={newsMediaIcon}
                            alt='Media Icon'
                        />
                        <h4
                            className='updatesBlockTitle'
                        >
                            {textContent.newsPage.fromTheMedia}
                        </h4>
                    </div>
                    <div className='newsMediaContainer'>
                        {mediaList.map(media => (
                            <div
                                className='mediaElement'
                                key={media.title}
                            >
                                <a
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    href={media.link}
                                >
                                    <img
                                        src={media.imgSrc}
                                        alt={media.title}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsComponent;
