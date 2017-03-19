import React from 'react';
import { Route, Link, IndexRoute, HashRouter, browserHistory } from 'react-router-dom';
import Page from './components/Page';
import Home from './components/Home';
import About from './components/About';
import Katathon from './components/Katathon';

import './styles/global.scss';

const App = (props) => {
  return (
    <HashRouter>
      <Page>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/katathon" component={Katathon} />
      </Page>
    </HashRouter>
  );
};

export default App;
