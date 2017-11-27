import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import PeoplePage from './components/people/PeoplePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PeoplePage}/>
    {/*<Route path="course" component={PeopleFormPage}/>*/}
  </Route>
);
