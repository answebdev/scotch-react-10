import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Misc from './components/pages/Misc';
import One from './components/pages/One';
import Two from './components/pages/Two';
import Three from './components/pages/Three';
import Four from './components/pages/Four';
import Five from './components/pages/Five';
import Six from './components/pages/Six';
import Seven from './components/pages/Seven';
import Eight from './components/pages/Eight';
import InfiniteScroll from './components/pages/InfiniteScroll';
import MapboxReact from './components/pages/MapboxReact';
import ReactDragDrop from './components/pages/ReactDragDrop';
import ReactForms from './components/pages/ReactForms';
import GooglePlaces from './components/pages/GooglePlaces';
import ReactStripeElements from './components/pages/ReactStripeElements';
import ReactReCaptcha from './components/pages/ReactReCaptcha';

import Navigation from './components/layout/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/misc' component={Misc} />
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
          <Route
            exact
            path='/recreate-layout-with-components'
            component={Eight}
          />
          <Route exact path='/infinite-scroll' component={InfiniteScroll} />
          <Route exact path='/mapbox-react' component={MapboxReact} />
          <Route exact path='/react-drag-n-drop' component={ReactDragDrop} />
          <Route exact path='/react-forms' component={ReactForms} />
          <Route exact path='/google-places' component={GooglePlaces} />
          <Route
            exact
            path='/react-stripe-elements'
            component={ReactStripeElements}
          />
          <Route
            exact
            path='/using-recaptcha-in-react-and-node'
            component={ReactReCaptcha}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
