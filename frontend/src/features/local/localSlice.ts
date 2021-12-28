import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initState = {
  isAuthModalVisible: boolean;
  buttonsData: Array<{ id: string; days: number; text: string }>;
  currencyData: Array<{ symbol: string; name: string }>;
  emptyPageSize: number;
  isAuthLoading: boolean;
  isTableLoading: boolean;
};

const initialState = {
  isAuthModalVisible: false,
  buttonsData: [
    { id: 'button_1', text: '24 HOURS', days: 1 },
    { id: 'button_2', text: '30 DAYS', days: 30 },
    { id: 'button_3', text: '3 MONTHS', days: 90 },
    { id: 'button_4', text: '1 YEAR', days: 365 }
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
  ],
  emptyPageSize: 0,
  isAuthLoading: false,
  isTableLoading: false
} as initState;

const localSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    setAuthModalVisible(state, action: PayloadAction<boolean>) {
      state.isAuthModalVisible = action.payload;
    },
    setEmptyPageSize(state, action: PayloadAction<number>) {
      state.emptyPageSize = action.payload - (110 + 100); // 110, 100 -> footer, header
    },
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.isAuthLoading = action.payload;
    },
    setTableLoading(state, action: PayloadAction<boolean>) {
      state.isTableLoading = action.payload;
    }
  }
});

export const { setAuthModalVisible, setEmptyPageSize, setAuthLoading, setTableLoading } =
  localSlice.actions;
export default localSlice.reducer;
