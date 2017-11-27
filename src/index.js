import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {loadPeople} from './actions/peopleActions';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS too.
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadPeople());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
