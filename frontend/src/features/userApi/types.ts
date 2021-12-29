import { oneCoinType } from 'features/coinGeckoApi/coinPage/types';
import { coinDataType } from 'features/coinGeckoApi/coinPage/types';

export type watchListItem = {
  id: string;
  name: string;
};
export type updateChart = { id: string; days: number; currency: string };
export type getWatchList = Omit<updateChart, 'id'>;
export type watchList = {
  userId: string;
  watchList: Array<oneCoinType>;
};

export type watchListData = Array<{
  coinData: coinDataType;
  chartData: Array<Array<number>>;
}>;

export type initState = {
  isWatchListLoading: boolean;
  isWatchListError: boolean;
  isAddWatchListItemError: boolean;
  defaultCurrency: string;
  isRemoveWatchListItemError: boolean;
  days: {
    [key: string]: number;
  };
  chartsLoading: {
    [key: string]: boolean;
  };
  charts: {
    [key: string]: Array<{ date: string; price: number }>;
  };
} & watchList;
