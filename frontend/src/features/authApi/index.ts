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
      localStorage.setItem('accessToken', action.payload.accessToken);
      state.isAuthLoading = false;
      state.isAuth = true;
      state.isAuthError = false;
    }),
      builder.addCase(registration.rejected, (state) => {
        localStorage.removeItem('accessToken');
        state.isAuthError = true;
        state.isAuth = false;
        state.isAuthLoading = false;
      }),
      builder.addCase(login.fulfilled, (state, action: PayloadAction<userDataType>) => {
        const user = {
          email: action.payload.user.email,
          id: action.payload.user.id,
          username: action.payload.user.username
        };
        state.user = user;
        state.tokens = {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken
        };
        localStorage.setItem('accessToken', action.payload.accessToken);
        state.isAuthLoading = false;
        state.isAuth = true;
        state.isAuthError = false;
      }),
      builder.addCase(login.rejected, (state) => {
        localStorage.removeItem('accessToken');
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
        localStorage.setItem('accessToken', action.payload.accessToken);
        state.isAuthLoading = false;
        state.isAuth = true;
        state.isAuthError = false;
      }),
      builder.addCase(refresh.rejected, (state) => {
        localStorage.removeItem('accessToken');
        state.isAuthError = true;
        state.isAuth = false;
        state.isAuthLoading = false;
      }),
      builder.addCase(logout.fulfilled, (state) => {
        localStorage.removeItem('accessToken');
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
