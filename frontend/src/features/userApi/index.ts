import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initState, watchList, watchListData } from './types';
import { getWatchList, addWatchedCoin, removeWatchedCoin, updateOneChart } from './thunks';

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
    builder.addCase(getWatchList.fulfilled, (state, action: PayloadAction<watchListData>) => {
      const watchList = action.payload.map((el) => {
        state.days[el.coinData.id] = 365;
        const coinData = {
          rank: el.coinData.market_cap_rank,
          name: el.coinData.name,
          image: el.coinData.image.large || '',
          currPrice:
            el.coinData.market_data.current_price[state.defaultCurrency.toLocaleLowerCase()],
          marketCap: el.coinData.market_data.market_cap[state.defaultCurrency.toLocaleLowerCase()],
          title: 'Description of the cryptocurrency',
          description: el.coinData.description['en'],
          id: el.coinData.id
        };
        const chartData = el.chartData.map((el) => {
          const date = new Date(el[0]);
          const year = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDate();
          const hour = date.getHours();
          const min = date.getMinutes();
          const sec = date.getSeconds();
          const fullDate = `${year}/${month}/${day}, ${hour} h. ${min} min. ${sec} sec.`;
          return { date: fullDate, price: el[1] };
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
            const date = new Date(el[0]);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const min = date.getMinutes();
            const sec = date.getSeconds();
            const fullDate = `${year}/${month}/${day}, ${hour} h. ${min} min. ${sec} sec.`;
            return { date: fullDate, price: el[1] };
          });
          state.charts[action.payload.id] = chartData;
          state.chartsLoading[action.payload.id] = false;
        }
      ),
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
export const { setUserDefaulCurrency, setDays, setLoadingChart } = userSlice.actions;
export default userSlice.reducer;
