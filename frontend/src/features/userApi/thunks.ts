import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from './axios';
import { coinGecko } from 'features/coinGeckoApi/axios';
import {
  oneWatchListData,
  watchList,
  watchListItem,
  ArrayWatchListData,
  updateChart,
  getWatchList,
  addNewCoin
} from './types';
import axios from 'axios';

const getWatchList = createAsyncThunk(
  'user/getWatchList',
  async ({ currency, days }: getWatchList) => {
    const { data } = await userApi().get('/watchList');
    const idList = data.watchList.map((el: watchListItem) => `${coinGecko}/${el.id}`);
    const allCoinsData = await axios.all(
      idList.map(async (endpoint: string) => {
        const { data } = await axios.get(endpoint);
        const { data: chartData } = await axios.get(
          `${coinGecko}/${data.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        const { prices } = chartData;
        return {
          coinData: data,
          chartData: prices
        };
      })
    );

    return allCoinsData as ArrayWatchListData;
  }
);
const updateOneChart = createAsyncThunk(
  'user/updateOneChart',
  async ({ id, days, currency }: updateChart) => {
    const { data } = await axios.get(
      `${coinGecko}/${id}/market_chart?vs_currency=${currency}&days=${days}`
    );
    const { prices } = data;
    return { data: prices, id };
  }
);
const addWatchedCoin = createAsyncThunk(
  'user/addWatchedCoin',
  async ({ newCoinData, days, currency }: addNewCoin) => {
    const { data: coinsData } = await userApi().put('/watchList', newCoinData);
    const lastCoin = coinsData.watchList[coinsData.watchList.length - 1];
    const { data: fullData } = await axios.get(`${coinGecko}/${lastCoin.id}`);
    const { data } = await axios.get(
      `${coinGecko}/${newCoinData.coinId}/market_chart?vs_currency=${currency}&days=${days}`
    );
    const { prices } = data;
    const newCoin = {
      coinData: fullData,
      chartData: prices
    };
    return newCoin as oneWatchListData;
  }
);
const removeWatchedCoin = createAsyncThunk('user/removeWatchedCoin', async (id?: string) => {
  if (id) {
    const { data } = await userApi().delete(`/watchList?id=${id}`);
    return { data, id } as { data: watchList; id: string };
  } else {
    const { data } = await userApi().delete('/watchList');
    return { data, id } as { data: watchList; id: string };
  }
});

export { getWatchList, addWatchedCoin, removeWatchedCoin, updateOneChart };
