import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import ROUTES from './routes';
import Restaurants from '../containers/Restaurants';
import Details from '../containers/Details';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={ROUTES.HOME}
        >
          <Restaurants />
        </Route>
        <Route
          exact
          path={ROUTES.DETAILS}
        >
          <Details />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;