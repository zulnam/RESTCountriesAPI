import { createSlice } from '@reduxjs/toolkit';
import { setRawCountriesAction } from './CountriesActions';

const initialState = {
  rawCountries: [],
  filteredCountries: [],
  filters: {
    region: '',
  },
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setRawCountries: setRawCountriesAction,
  },
});

export const { setRawCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
