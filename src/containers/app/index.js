import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import Home from '../home';
import CreateIntro from '../recordings/new/introduction';
import CreateConclusions from '../recordings/new/conclusions';
import CreateLayers from '../recordings/new/layers';

import ViewRecording from '../recordings/view';

import { Navigation } from '../../components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recordings/new/introduction" component={CreateIntro} />
          <Route exact path="/recordings/new/layers" component={CreateLayers} />
          <Route exact path="/recordings/new/conclusions" component={CreateConclusions} />
          <Route exact path="/recordings/:recordingId" component={ViewRecording} />
        </Switch>
      </div>
    );
  }
}

export default App;
