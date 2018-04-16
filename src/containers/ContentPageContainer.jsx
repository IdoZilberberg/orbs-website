import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FooterComponent from 'components/FooterComponent';
import HeaderComponent from 'components/HeaderComponent'
import cloudVideo from 'img/main/cloudVideo.mp4';
import AboutComponent from 'components/contentComponents/AboutComponent';
import ClientsComponent from 'components/contentComponents/ClientsComponent';
import NewsComponent from 'components/contentComponents/NewsComponent';
import TeamComponent from 'components/contentComponents/TeamComponent';
import TechnologyComponent from 'components/contentComponents/TechnologyComponent';
import VisionComponent from 'components/contentComponents/VisionComponent';
import CareersComponent from 'components/contentComponents/CareersComponent';

const ContentPageContainer = () => {
        return (
            <div>
                <video
                    className='video'
                    loop='loop'
                    preload='auto'
                    autoPlay='true'
                    width='1905'
                    height='1072'
                >
                    <source src={cloudVideo} type="video/mp4" />
                </video>
                <div className='backgroundContainer' />
                <HeaderComponent />
                <Switch>
                    <Route path='/about' title='About Orbs' component={AboutComponent} />
                    <Route path='/vision' component={VisionComponent} />
                    <Route path='/technology' component={TechnologyComponent} />
                    <Route path='/clients' component={ClientsComponent} />
                    <Route path='/careers' component={CareersComponent} />
                    <Route path='/team' component={TeamComponent} />
                    <Route path='/news' component={NewsComponent} />
                </Switch>
                <div>
                    <FooterComponent />
                </div>
            </div>
        );
}


export default ContentPageContainer;
