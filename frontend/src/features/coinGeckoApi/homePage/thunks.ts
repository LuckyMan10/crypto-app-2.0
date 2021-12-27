import { createAsyncThunk } from '@reduxjs/toolkit';
import { coinGeckoApi } from 'features/coinGeckoApi/axios';
import { coinDataType } from './types';

const getTrendingCoins = createAsyncThunk('home/getTrendingCoins', async (currency: string) => {
  const { data } = await coinGeckoApi.get(
    `/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  );
  return data as Array<coinDataType>;
});
const getCoinsList = createAsyncThunk('home/getCoinsList', async (currency: string) => {
  const { data } = await coinGeckoApi.get(
    `/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  return data as Array<coinDataType>;
});

export { getTrendingCoins, getCoinsList };
