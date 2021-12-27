import { configureStore } from '@reduxjs/toolkit';
import local from 'features/local/localSlice';
import auth from 'features/authApi';
import user from 'features/userApi';
import home from 'features/coinGeckoApi/homePage';
import coin from 'features/coinGeckoApi/coinPage';

export const store = configureStore({
  reducer: {
    local,
    auth,
    user,
    home,
    coin
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
