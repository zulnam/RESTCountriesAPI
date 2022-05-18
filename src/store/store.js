import { configureStore } from '@reduxjs/toolkit';

import countriesReducer from './reducers/countries/countriesReducer';

const rootReducer = {
  countries: countriesReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
