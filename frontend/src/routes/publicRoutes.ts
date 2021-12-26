import { Home } from 'pages/home';
import { Coin } from 'pages/coin';
import { Routes } from './types';
import { RouteNames } from './enum';

const publicRoutes: Routes[] = [
  { path: RouteNames.HOME, exact: true, component: Home },
  { path: RouteNames.COIN, exact: true, component: Coin }
];

export { publicRoutes };
