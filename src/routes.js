import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import PeopleListPage from './components/people/PeopleListPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PeopleListPage}/>
  </Route>
);
