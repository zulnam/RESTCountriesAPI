import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchForCountry } from '../../../store/reducers/countries/countriesReducer';

import SearchContainer from './SearchContainer';
import SearchIcon from './SearchIcon';
import Input from './Input';
import SearchIconSVG from '../../Icons/Search';

const SearchInput = () => {
  const dispatch = useDispatch();
  const regionFilter = useSelector((state) => state.countries.filters.region);
  const darkMode = useSelector((state) => state.user.darkMode);
  const [value, setValue] = useState('');

  const changeHandler = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  useEffect(() => {
    dispatch(searchForCountry(value));
  }, [dispatch, value]);

  useEffect(() => {
    setValue('');
  }, [regionFilter]);

  return (
    <SearchContainer
      className={darkMode ? 'dark-theme-header' : 'white-theme-header'}
    >
      <SearchIcon darkMode={darkMode}>
        <SearchIconSVG />
      </SearchIcon>
      <Input
        className={darkMode ? 'dark-theme-header' : 'white-theme-header'}
        type="text"
        name="search"
        data-cy="search-input"
        placeholder="Search for a country..."
        value={value}
        onChange={changeHandler}
      />
    </SearchContainer>
  );
};

export default SearchInput;
