import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import Home from '../home';

import { Navigation } from '../../components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
