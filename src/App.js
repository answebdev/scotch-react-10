import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import One from './components/pages/One';
import Two from './components/pages/Two';
import Three from './components/pages/Three';
import Four from './components/pages/Four';
import Five from './components/pages/Five';
import Six from './components/pages/Six';
import Seven from './components/pages/Seven';

import Navigation from './components/layout/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/display-simple-data-with-jsx' component={One} />
          <Route
            exact
            path='/loop-over-and-display-data-with-jsx'
            component={Two}
          />
          <Route
            exact
            path='/use-react-state-to-update-the-dom'
            component={Three}
          />
          <Route
            exact
            path='/show-an-alert-based-on-an-input'
            component={Four}
          />
          <Route exact path='/adding-calculator' component={Five} />
          <Route exact path='/dom-movement-with-events' component={Six} />
          <Route
            exact
            path='/fetch-and-display-from-an-api'
            component={Seven}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
