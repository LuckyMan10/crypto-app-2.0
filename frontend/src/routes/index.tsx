import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes } from './publicRoutes';
import { authRoutes } from './authRoutes';
import { RouteNames } from './enum';
import { useAppSelector } from 'app/hooks';

const AppRouter: React.FC = () => {
  const { isAuth, isAuthError } = useAppSelector((state) => state.auth);
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
      {isAuth &&
        !isAuthError &&
        authRoutes.map((route) => {
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
