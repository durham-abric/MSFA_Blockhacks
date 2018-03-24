import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import * as firebaseFunctions from './firebase'
import './index.css';

//bodies
import MainPage from './bodies/main'

const Redirection = () => (
  <Redirect to={"/main"}/>
);

firebaseFunctions.init();

ReactDOM.render(
  <div>
    <Router>
      <Switch>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root'));

registerServiceWorker();
