import { Routes } from './types';
import { RouteNames } from './enum';
import { WatchList } from 'pages/watchList';

const authRoutes: Routes[] = [{ path: RouteNames.WATCHLIST, exact: true, component: WatchList }];

export { authRoutes };
