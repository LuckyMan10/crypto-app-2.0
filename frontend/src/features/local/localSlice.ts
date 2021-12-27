import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initState = {
  isAuthModalVisible: boolean;
  buttonsData: Array<{ label: string; value: number }>;
  currencyData: Array<{ symbol: string; name: string }>;
};

const initialState = {
  isAuthModalVisible: false,
  buttonsData: [
    { label: '24 HOURS', value: 1 },
    { label: '30 DAYS', value: 30 },
    { label: '3 MONTHS', value: 90 },
    { label: '1 YEAR', value: 365 }
  ],
  currencyData: [
    { symbol: 'USD', name: 'US Dollar' },
    { symbol: 'EUR', name: 'Euro' },
    { symbol: 'RUB', name: 'Russian Ruble' },
    { symbol: 'IDR', name: 'Indonesian Rupiah' },
    { symbol: 'KRW', name: 'South Korean Won' },
    { symbol: 'CNY', name: 'Chinese Yuan' },
    { symbol: 'TWD', name: 'New Taiwan Dollar' },
    { symbol: 'JPY', name: 'Japanese Yen' }
  ]
} as initState;

const localSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    setAuthModalVisible(state, action: PayloadAction<boolean>) {
      state.isAuthModalVisible = action.payload;
    }
  }
});

export const { setAuthModalVisible } = localSlice.actions;
export default localSlice.reducer;
