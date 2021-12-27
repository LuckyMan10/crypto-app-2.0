import { createAsyncThunk } from '@reduxjs/toolkit';
import { userDataType, logoutType, loginType, registrationType } from './types';
import { authApi } from './axios';

const registration = createAsyncThunk('auth/registration', async (regData: registrationType) => {
  const { data } = await authApi.post('/registration', regData);
  return data as userDataType;
});

const login = createAsyncThunk('auth/login', async (logData: loginType) => {
  const { data } = await authApi.post('/login', logData);
  return data as userDataType;
});

const refresh = createAsyncThunk('auth/refresh', async () => {
  const { data } = await authApi.get('/refresh');
  return data as userDataType;
});

const logout = createAsyncThunk('auth/logout', async () => {
  const { data } = await authApi.get('/logout');
  return data as logoutType;
});

export { registration, login, refresh, logout };
