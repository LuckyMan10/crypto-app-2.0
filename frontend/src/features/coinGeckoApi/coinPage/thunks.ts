import { createAsyncThunk } from '@reduxjs/toolkit';
import { coinGeckoApi } from 'features/coinGeckoApi/axios';
import { chartArgsType, coinDataType } from './types';

const getChartData = createAsyncThunk('coin/getChartData', async (chartArgs: chartArgsType) => {
  const { id, days, currency } = chartArgs;
  const { data } = await coinGeckoApi.get(
    `/${id}/market_chart?vs_currency=${currency}&days=${days}`
  );
  const { prices } = data;
  return prices as Array<Array<number>>;
});

const getOneCoinData = createAsyncThunk('coin/getOneCoinData', async (id: string) => {
  const { data } = await coinGeckoApi.get(`/${id}`);
  return data as coinDataType;
});

export { getChartData, getOneCoinData };
