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

export const searchForCountryAction = (state, action) => {
  if (!action.payload) {
    //if search is cleared, return to filtered list if it exists
    //or raw list if it doesn't
    if (state.filters.region) {
      filterByRegionAction(state);
    } else {
      state.filteredCountries = [];
    }
  } else if (state.filters.region) {
    //update filtered list based on existing filters  (not a fan)
    //and search through it
    const filtered = state.rawCountries.filter(
      (entry) =>
        entry.region === state.filters.region &&
        entry.name.toLowerCase().includes(action.payload.toLowerCase())
    );
    state.filteredCountries = filtered;
  } else {
    //search for name through raw list
    state.filteredCountries = state.rawCountries.filter((entry) =>
      entry.name.toLowerCase().includes(action.payload.toLowerCase())
    );
  }
};
