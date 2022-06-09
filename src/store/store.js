import { configureStore } from '@reduxjs/toolkit';

import countriesReducer from './reducers/countries/countriesReducer';
import userReducer from './reducers/user/userReducer';

const rootReducer = {
  countries: countriesReducer,
  user: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV != 'production',
});

export default store;
