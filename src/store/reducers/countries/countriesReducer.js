import { createSlice } from '@reduxjs/toolkit';
import {
  setRawCountriesAction,
  setRegionFilterAction,
  filterByRegionAction,
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
  },
});

export const { setRawCountries, setRegionFilter, filterByRegion } =
  countriesSlice.actions;

export default countriesSlice.reducer;
