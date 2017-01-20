import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

import './styles/global.scss';

const App = React.createClass({
  getInitialState: function(){
    return {page: 'home'}
  },
  render: function () {
    return (
      <div className="page">
        <Header/>
        <Router history={hashHistory}>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
        </Router>
        <Footer page={this.state.page}/>
      </div>
    );
  }
});

export default App;
