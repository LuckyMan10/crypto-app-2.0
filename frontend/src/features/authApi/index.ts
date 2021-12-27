import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initState, userDataType } from './types';
import { registration, login, refresh, logout } from './thunks';

const initialState = {
  user: {},
  tokens: {},
  isAuth: false,
  isAuthLoading: true,
  isAuthError: false
} as initState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registration.fulfilled, (state, action: PayloadAction<userDataType>) => {
      state.user = action.payload.user;
      state.tokens = {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      };
      state.isAuthLoading = false;
      state.isAuth = true;
      state.isAuthError = false;
    }),
      builder.addCase(registration.rejected, (state) => {
        state.isAuthError = true;
        state.isAuth = false;
        state.isAuthLoading = false;
      }),
      builder.addCase(login.fulfilled, (state, action: PayloadAction<userDataType>) => {
        state.user = action.payload.user;
        state.tokens = {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken
        };
        state.isAuthLoading = false;
        state.isAuth = true;
        state.isAuthError = false;
      }),
      builder.addCase(login.rejected, (state) => {
        state.isAuthError = true;
        state.isAuth = false;
        state.isAuthLoading = false;
      }),
      builder.addCase(refresh.fulfilled, (state, action: PayloadAction<userDataType>) => {
        state.user = action.payload.user;
        state.tokens = {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken
        };
        state.isAuthLoading = false;
        state.isAuth = true;
        state.isAuthError = false;
      }),
      builder.addCase(refresh.rejected, (state) => {
        state.isAuthError = true;
        state.isAuth = false;
        state.isAuthLoading = false;
      }),
      builder.addCase(logout.fulfilled, (state) => {
        state.isAuth = false;
        state.isAuthError = false;
        state.isAuthLoading = false;
        state.user = {
          email: '',
          id: '',
          username: ''
        };
        state.tokens = {
          refreshToken: '',
          accessToken: ''
        };
      });
  }
});

export default authSlice.reducer;
