import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import LandingPageContainer from './containers/LandingPageContainer';
import HomePageContainer from './containers/HomePageContainer';
import ContentPageContainer from './containers/ContentPageContainer';
import textContent from 'textContentLocalisation';

class App extends Component {
  componentWillMount() {
    textContent.setLanguage(textContent.getInterfaceLanguage());
  }
  render() {
    return (
      <div id='app'>
        <div className='backgroundContainer' />
          <Switch>
            <Route path='/home' component={HomePageContainer} />
            <Route exact path='/' component={LandingPageContainer} />
            <Route component={ContentPageContainer} />
          </Switch>
      </div>

    );
  };
};

export default App;
