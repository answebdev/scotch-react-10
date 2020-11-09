import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import One from './components/pages/One';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
