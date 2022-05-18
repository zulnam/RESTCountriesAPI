export const setRawCountriesAction = (state, action) => {
  state.rawCountries = action.payload;
};

export const setRegionFilterAction = (state, action) => {
  state.filters.region = action.payload;
};

export const filterByRegionAction = (state) => {
  const filtered = state.rawCountries.filter(
    (entry) => entry.region === state.filters.region
  );

  state.filteredCountries = filtered;
};
