import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initState, watchList, ArrayWatchListData, oneWatchListData } from './types';
import { getWatchList, addWatchedCoin, removeWatchedCoin, updateOneChart } from './thunks';
import { dateFormatter } from 'utils/dateFormatter';
import { coinFormatter } from 'utils/coinFormatter';

const initialState = {
  userId: '',
  watchList: [],
  charts: {},
  isWatchListLoading: true,
  isWatchListError: false,
  isAddWatchListItemError: false,
  isRemoveWatchListItemError: false,
  defaultCurrency: 'USD',
  days: {},
  chartsLoading: {}
} as initState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDefaulCurrency(state, action: PayloadAction<string>) {
      state.defaultCurrency = action.payload;
    },
    setDays(state, action: PayloadAction<{ id: string; days: number }>) {
      state.days[action.payload.id] = action.payload.days;
    },
    setLoadingChart(state, action: PayloadAction<string>) {
      state.chartsLoading[action.payload] = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getWatchList.fulfilled, (state, action: PayloadAction<ArrayWatchListData>) => {
      const watchList = action.payload.map((el) => {
        state.days[el.coinData.id] = 365;
        const coinData = coinFormatter(el.coinData, state.defaultCurrency);
        const chartData = el.chartData.map((el) => {
          return dateFormatter(el);
        });
        state.charts[el.coinData.id] = chartData;
        state.chartsLoading[el.coinData.id] = false;
        return coinData;
      });
      state.watchList = watchList;
      state.isWatchListLoading = false;
      state.isWatchListError = false;
    }),
      builder.addCase(
        updateOneChart.fulfilled,
        (state, action: PayloadAction<{ data: Array<Array<number>>; id: string }>) => {
          const chartData = action.payload.data.map((el) => {
            return dateFormatter(el);
          });
          state.charts[action.payload.id] = chartData;
          state.chartsLoading[action.payload.id] = false;
        }
      ),
      builder.addCase(getWatchList.rejected, (state) => {
        state.isWatchListError = true;
        state.isWatchListLoading = false;
      }),
      builder.addCase(
        addWatchedCoin.fulfilled,
        (state, action: PayloadAction<oneWatchListData>) => {
          state.days[action.payload.coinData.id] = 365;
          const coinData = coinFormatter(action.payload.coinData, state.defaultCurrency);
          const chartData = action.payload.chartData.map((el) => {
            return dateFormatter(el);
          });
          state.charts[coinData.id] = chartData;
          state.watchList.push(coinData);
          state.chartsLoading[coinData.id] = false;
          state.isAddWatchListItemError = false;
        }
      ),
      builder.addCase(addWatchedCoin.rejected, (state) => {
        state.isAddWatchListItemError = true;
      }),
      builder.addCase(
        removeWatchedCoin.fulfilled,
        (state, action: PayloadAction<{ data: watchList; id?: string }>) => {
          if (action.payload.id) {
            delete state.days[action.payload.id];
            delete state.charts[action.payload.id];
            delete state.chartsLoading[action.payload.id];
            state.watchList = state.watchList.filter((el) => el.id !== action.payload.id);
          }
          state.isRemoveWatchListItemError = false;
        }
      ),
      builder.addCase(removeWatchedCoin.rejected, (state) => {
        state.isRemoveWatchListItemError = true;
      });
  }
});
export const { setUserDefaulCurrency, setDays, setLoadingChart } = userSlice.actions;
export default userSlice.reducer;
