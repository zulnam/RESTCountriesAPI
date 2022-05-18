import { createSlice } from '@reduxjs/toolkit';
import {
  setRawCountriesAction,
  setRegionFilterAction,
  filterByRegionAction,
  searchForCountryAction,
} from './CountriesActions';

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
    setRegionFilter: setRegionFilterAction,
    filterByRegion: filterByRegionAction,
    searchForCountry: searchForCountryAction,
  },
});

export const {
  setRawCountries,
  setRegionFilter,
  filterByRegion,
  searchForCountry,
} = countriesSlice.actions;

export default countriesSlice.reducer;
