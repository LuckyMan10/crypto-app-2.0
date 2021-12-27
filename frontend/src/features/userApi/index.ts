import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initState, watchList } from './types';
import { getWatchList, addWatchedCoin, removeWatchedCoin } from './thunks';

const initialState = {
  userId: '',
  watchList: [],
  isWatchListLoading: true,
  isWatchListError: false,
  isAddWatchListItemError: false,
  isRemoveWatchListItemError: false
} as initState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWatchList.fulfilled, (state, action: PayloadAction<watchList>) => {
      state.userId = action.payload.userId;
      state.watchList = action.payload.watchList;
      state.isWatchListLoading = false;
      state.isWatchListError = false;
    }),
      builder.addCase(getWatchList.rejected, (state) => {
        state.isWatchListError = true;
        state.isWatchListLoading = false;
      }),
      builder.addCase(addWatchedCoin.fulfilled, (state, action: PayloadAction<watchList>) => {
        state.watchList = action.payload.watchList;
        state.isAddWatchListItemError = false;
      }),
      builder.addCase(addWatchedCoin.rejected, (state) => {
        state.isAddWatchListItemError = true;
      }),
      builder.addCase(removeWatchedCoin.fulfilled, (state, action: PayloadAction<watchList>) => {
        state.watchList = action.payload.watchList;
        state.isRemoveWatchListItemError = false;
      }),
      builder.addCase(removeWatchedCoin.rejected, (state) => {
        state.isRemoveWatchListItemError = true;
      });
  }
});

export default userSlice.reducer;
