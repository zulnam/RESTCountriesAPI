import { useEffect, useState, useCallback, useRef } from 'react';
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
  const prevValue = useRef(undefined);

  const changeHandler = useCallback((event) => {
    setValue(event.target.value);
    prevValue.current = event.target.value;
  }, []);

  useEffect(() => {
    if (prevValue.current != undefined) {
      dispatch(searchForCountry(value));
    }
  }, [dispatch, value]);

  useEffect(() => {
    setValue('');
  }, [regionFilter]);

  return (
    <SearchContainer
      className={
        darkMode
          ? 'dark-theme-header dark-box-shadow'
          : 'light-theme-header light-box-shadow'
      }
    >
      <SearchIcon darkMode={darkMode}>
        <SearchIconSVG />
      </SearchIcon>
      <Input
        className={darkMode ? 'dark-theme-header' : 'light-theme-header'}
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
