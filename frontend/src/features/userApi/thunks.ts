import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from './axios';
import { watchList } from './types';

const getWatchList = createAsyncThunk('user/getWatchList', async () => {
  const { data } = await userApi.get('/watchList');
  return data as watchList;
});
const addWatchedCoin = createAsyncThunk('user/addWatchedCoin', async () => {
  const { data } = await userApi.put('/watchList');
  return data as watchList;
});
const removeWatchedCoin = createAsyncThunk('user/removeWatchedCoin', async () => {
  const { data } = await userApi.delete('/watchList');
  return data as watchList;
});

export { getWatchList, addWatchedCoin, removeWatchedCoin };
