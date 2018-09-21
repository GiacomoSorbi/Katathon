import React from 'react';
import { Route, IndexRoute, HashRouter, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

//Components
import Page from './components/Page';
import Home from './containers/Home';
import About from './components/About';
import KatathonData from './components/KatathonData';

//Styles
import './styles/global.scss';

const App = (props) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <Page>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/katathon" component={KatathonData} />
        </Page>
      </HashRouter>
    </Provider>
  );
};

export default App;
