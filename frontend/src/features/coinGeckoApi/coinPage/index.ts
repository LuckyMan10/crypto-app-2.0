import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initState, coinDataType } from './types';
import { getChartData, getOneCoinData } from './thunks';

const initialState = {
  chartData: [],
  oneCoinData: [],
  isChartDataLoading: true,
  isOneCoinLoading: true,
  isOneCoinError: false,
  isChartDataError: false,
  defaultCurrency: 'USD',
  days: 365
} as initState;

const coinPageSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setDefaultCurrency(state, action: PayloadAction<string>) {
      state.defaultCurrency = action.payload;
    },
    setDays(state, action: PayloadAction<number>) {
      state.days = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getChartData.fulfilled,
      (state, action: PayloadAction<Array<Array<number>>>) => {
        state.isChartDataError = false;
        state.isChartDataLoading = false;
        const chartPrices = action.payload.map(
          (coin: number[]): { date: string; price: number } => {
            const date = new Date(coin[0]);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const min = date.getMinutes();
            const sec = date.getSeconds();
            const fullDate = `${year}/${month}/${day}, ${hour} h. ${min} min. ${sec} sec.`;
            return { date: fullDate, price: coin[1] };
          }
        );
        state.chartData = chartPrices;
      }
    ),
      builder.addCase(getChartData.pending, (state) => {
        state.isChartDataLoading = true;
      }),
      builder.addCase(getChartData.rejected, (state) => {
        state.isChartDataError = true;
        state.isChartDataLoading = false;
      }),
      builder.addCase(getOneCoinData.fulfilled, (state, action: PayloadAction<coinDataType>) => {
        state.isOneCoinError = false;
        console.log(action.payload);
        const coinData = {
          rank: action.payload.market_cap_rank,
          name: action.payload.name,
          image: action.payload.image.large || '',
          currPrice:
            action.payload.market_data.current_price[state.defaultCurrency.toLocaleLowerCase()],
          marketCap:
            action.payload.market_data.market_cap[state.defaultCurrency.toLocaleLowerCase()],
          title: 'Description of the cryptocurrency',
          description: action.payload.description['en'].replace(/(?:https?|ftp):\/\/[\n\S]+/g, ''),
          id: action.payload.id
        };
        state.oneCoinData.pop();
        state.oneCoinData.push(coinData);
        state.isOneCoinLoading = false;
      }),
      builder.addCase(getOneCoinData.pending, (state) => {
        state.isOneCoinLoading = true;
      });
    builder.addCase(getOneCoinData.rejected, (state) => {
      state.isOneCoinError = true;
      state.isOneCoinLoading = false;
    });
  }
});

export const { setDefaultCurrency, setDays } = coinPageSlice.actions;

export default coinPageSlice.reducer;
