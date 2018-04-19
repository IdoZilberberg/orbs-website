import React from 'react';
import VacancyBodyComponent from '../components/VacancyBodyComponent';
import arrow from '../img/careersPage/arrow.png'
import logo from '../img/main/logo.gif';

class VacancyContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            popupTrigger: false
        }
    }
    popupSwitch() {
        this.setState ({ popupTrigger: !this.state.popupTrigger })
    }
    render() {
        const popupSwitch = this.popupSwitch.bind(this);
        const { content, vacancy } =this.props;
        let popupDisplayState = this.state.popupTrigger ? 'block' : 'none'
        const vacansiesColors = ['#1CBDC9', '#324158', '#536EB7'];
        const getRandomColor = colors => {
            const randomIndex = Math.floor(Math.random() * colors.length)
            return colors[randomIndex]
        };
        const sectionsCollection = [];
        const sections = vacancy.sections;
        sections.map(section => {
            sectionsCollection.push(
                <VacancyBodyComponent
                    key={`bodyTitles${sectionsCollection.length}`}
                    sectionTitle={section.name}
                    sectionBody={section.list}
                />
            )
        });
        return (
            <div
                style={{ backgroundColor: getRandomColor(vacansiesColors) }}
                className='vacancyBlock'
            >
                <h4 className='vacancyTitle'>
                    {vacancy.title}
                </h4>
                <hr
                    color='white'
                    size='1'
                    width='15px'
                />
                <p className='vacancySubtitle'>
                    {vacancy.subtitle}</p>
                <div>
                    <img
                        onClick={popupSwitch}
                        src={arrow}
                        className='vacancyButton'
                        alt='Arrow'
                    />
                    <div className='vacancyPopup' style={{ display: popupDisplayState }}>
                        <div className='vacancyPopupContent'>
                            <div
                                className='vacancyPopupCloseButton'
                                title={content.backToSite}
                            >
                                <svg
                                    onClick={popupSwitch}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="25.974998474121094 25.975000381469727 148.05001831054688 148.0500030517578"
                                    role="img"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    <g>
                                        <path
                                            d="M172.9 167.6L105.3 100l67.6-67.6c1.5-1.5 1.5-3.8 0-5.3s-3.8-1.5-5.3 0L100 94.7 32.4 27.1c-1.5-1.5-3.8-1.5-5.3 0s-1.5 3.8 0 5.3L94.7 100l-67.6 67.6c-1.5 1.5-1.5 3.8 0 5.3s3.8 1.5 5.3 0l67.6-67.6 67.6 67.6c1.5 1.5 3.8 1.5 5.3 0s1.5-3.8 0-5.3z"
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div className='vacancyPopupHeader'>
                                <img
                                    className='vacancyLogo'
                                    src={logo}
                                    alt='logo'
                                />
                                <h2
                                    className='vacancyPopupTitle'
                                >
                                    {vacancy.title}
                                </h2>
                            </div>
                            <p
                                className='vacancyPopupSubtitle'
                            >
                                {vacancy.subtitle}
                            </p>
                            <div>
                                {sectionsCollection}
                            </div>
                            <div>
                                <h5
                                    className='vacancyApplyTitle'
                                >
                                    {content.toApply}
                                </h5>
                                <p className='vacancyApplyBody'>
                                    {content.sendEmailTo}
                                    hello@orbs.com
                                {content.withYourCV}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default VacancyContainer;
