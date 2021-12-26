import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { RouteNames } from './enum';

const AppRouter: React.FC = () => {
  return (
    <Switch>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        );
      })}
      <Redirect to={RouteNames.HOME} />
    </Switch>
  );
};

export { AppRouter };
