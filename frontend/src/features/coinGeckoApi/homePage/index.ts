import { initState, coinDataType } from './types';
import { getTrendingCoins, getCoinsList } from './thunks';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  trendingCoins: [],
  coinsList: [],
  filtredCoinsList: [],
  currentCoins: [],
  isTrendingCoinsLoading: true,
  isCoinsListLoading: true,
  isTrendingCoinsError: false,
  isCoinsListError: false,
  currentPage: 1,
  allPages: 0,
  coinsStart: 0,
  coinsEnd: 10,
  isFiltred: false,
  searchValue: '',
  defaultCurrency: 'USD'
} as initState;

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCurrency(state, action: PayloadAction<string>) {
      state.defaultCurrency = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      getTrendingCoins.fulfilled,
      (state, action: PayloadAction<Array<coinDataType>>) => {
        state.trendingCoins = action.payload;
        state.isTrendingCoinsLoading = false;
        state.isTrendingCoinsError = false;
      }
    ),
      builder.addCase(getTrendingCoins.rejected, (state) => {
        state.isTrendingCoinsError = true;
        state.isTrendingCoinsLoading = false;
      }),
      builder.addCase(
        getCoinsList.fulfilled,
        (state, action: PayloadAction<Array<coinDataType>>) => {
          const filtredData = action.payload.map((el) => {
            return {
              coin: el.name,
              image: el.image,
              id: el.id,
              change: el.market_cap_change_percentage_24h,
              cap: el.market_cap,
              key: `key_${el.id}`,
              price: `${el.current_price} ${state.defaultCurrency}`
            };
          });
          state.coinsList = filtredData;
          state.isCoinsListLoading = false;
          state.isCoinsListError = false;
        }
      ),
      builder.addCase(getCoinsList.rejected, (state) => {
        state.isCoinsListError = true;
        state.isCoinsListLoading = false;
      });
  }
});
export const { setCurrency } = homeSlice.actions;
export default homeSlice.reducer;
