import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Page from './components/Page';
import Home from './components/Home';
import About from './components/About';
import Katathon from './components/Katathon';

import './styles/global.scss';

const App = (props) => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Page}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/katathon" component={Katathon} />
      </Route>
    </Router>
  );
};

export default App;
